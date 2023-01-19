<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="hero">
      <h1>Tidsbokning</h1>
      <h3>Välkommen</h3>
      <h3>{{ thisDayDate }}</h3>
    </div>

    <div class="booking-container">
      <div class="p-7 text-2xl text-white">
        <h2 v-if="handleEdit">Ändra tid</h2>
        <h2 class="text-inherit" v-else>Välj tid för att boka</h2>
      </div>

      <form class="flex flex-col items-center justify-center">
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

        <span class="divider"></span>
        <div class="">
          <Suspense>
            <BookingTime
              @onTimeObj="BookingTimeData"
              :dateObject="dateObject"
            />
          </Suspense>
        </div>
        <div class="btn-container">
          <input
            type="button"
            :value="`${btnMsg}`"
            :disabled="timeValue.length < 1 ? true : false"
            :class="{
              'bg-gray-500 text-gray-600': timeValue.length < 1,
              'bg-green-600': timeValue.length > 1,
            }"
            class="btn-primary-lg"
            @click.prevent="handleConfirm()"
          />

          <div class="btn-empty-lg"></div>
        </div>
      </form>

      <div v-if="readybook" className="booking-confirm-container ">
        <div class="flex flex-col self-start gap-1">
          <h2 class="text-3xl">Bekräfta bokning</h2>
          <h3>Vill du boka denna tid?</h3>
          <h5>{{ timeValue }} {{ dateValue }}</h5>
          <h5></h5>
        </div>
        <div class="btn-container">
          <input
            type="button"
            class="btn-primary-lg"
            @click="submitBooking()"
            value="Ja, boka!"
          />

          <div class="btn-empty-lg">
            <button @click="readybook = false">Avbryt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
