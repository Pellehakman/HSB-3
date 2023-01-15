<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="flex flex-col justify-center items-center">
      <h1>Välkommen!</h1>
      <h2>Logga in för att boka en tvättid!</h2>
    </div>

    <div class="bg-cyan-700">
      <div class="">
        <h1 v-if="awesome">Ändra tid</h1>
        <h1 class="p-7" v-else>Välj tid för att boka</h1>
      </div>

      <form class="flex flex-col items-center justify-center gap-6">
        <div id="date" class="booking-day">
          <div
            class="pl-4"
            v-for="(date, index) in dateDocs"
            :key="`dag_${index}`"
          >
            <BookingDate
              :todaysDate="dateValue"
              :date="date.date"
              @onDateUpdate="BookingDayData"
            />
          </div>
        </div>
        <span class="h-px w-4/5 bg-white opacity-30"></span>

        <BookingTime
          class="booking-time-grid"
          @onTimeUpdate="BookingTimeData"
        />
        <div class="btn-container">
          <button class="btn-primary-lg" @click.prevent="handleConfirm()">
            Boka tid
          </button>
          <div class="btn-empty-lg bg-transparent text-black font-normal"></div>
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
