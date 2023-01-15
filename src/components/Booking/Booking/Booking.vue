<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="">
    <div className="bg-cyan-600 rounded-t-2xl ">
      <div class="main-menu-font">
        <h1 v-if="awesome">Ändra tid</h1>
        <h1 class="p-7" v-else>Välj tid för att boka</h1>
      </div>

      <form class="flex flex-col items-center justify-center">
        <div id="date" class="flex flex-row overflow-x-scroll w-screen">
          <div
            class="pl-5"
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

        <BookingTime
          class="w-screen grid grid-cols-2 grid-rows-2 p-5 gap-5"
          @onTimeUpdate="BookingTimeData"
        />

        <div class="mt-24 pb-20">
          <button
            class="p-4 w-64 rounded-md text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-base"
            @click.prevent="handleConfirm()"
          >
            Boka tid
          </button>
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
