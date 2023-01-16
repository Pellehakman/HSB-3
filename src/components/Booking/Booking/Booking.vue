<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="flex-1 flex flex-col w-screen justify-center pl-12">
      <h1>Tidsbokning</h1>
      <h2>Välkommen</h2>
      <h3>Måndag 15 januari</h3>
    </div>

    <div class="bg-cyan-700">
      <div class="">
        <h1 v-if="awesome">Ändra tid</h1>
        <h1 class="p-7 text-white" v-else>Välj tid för att boka</h1>
      </div>

      <form class="flex flex-col items-center justify-center gap-6">
        <div id="date" class="booking-day">
          <div class="booking-day-chevron-l">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </div>

          <Suspense>
            <div v-for="(date, index) in dateDocs" :key="`dag_${index}`">
              <BookingDate
                :todaysDate="dateValue"
                :date="date.date"
                @onDateUpdate="BookingDayData"
                @onDateObj="DateObj"
              />
            </div>
          </Suspense>

          <div class="booking-day-chevron-r">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
        </div>

        <span class="h-px w-4/5 bg-white opacity-30"></span>
        <div class="booking-time-grid">
          <div
            class="hej"
            v-for="(timeItem, index) in dateObject"
            :key="`dag_${index}`"
          >
            <label className="">
              <input
                @change="timeData"
                required
                :value="timeItem.time"
                :userid="timeItem.userid"
                type="radio"
                class="hidden peer"
                name="time"
              />
              <div ref="timeItem" class="booking-time-item">
                {{ timeItem.time }}
              </div>
            </label>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn-primary-lg" @click.prevent="handleConfirm()">
            Boka tid
          </button>
          <div class="btn-empty-lg"></div>
        </div>
      </form>

      <div v-if="readybook" className="popup">
        <p>vill du bekräfta?</p>
        <button @click="submitBooking()">Ja</button>
        <button @click="readybook = false">Avbryt</button>
      </div>
    </div>
  </div>
</template>
