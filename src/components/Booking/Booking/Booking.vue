<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="h-screen">
    <h1 v-if="awesome">Ändra tid</h1>
    <h1 v-else>Välj tid att boka</h1>
    <div className="bg-red-400 ">
      Välj tid att boka
      <form>
        <div
          id="date"
          class="bg-yellow-400 flex flex-row overflow-x-scroll w-screen gap-4"
        >
          <div
            class="bg-blue-400"
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
        <BookingSlot @onTimeUpdate="BookingTimeData" />

        <button class="main-btn" @click.prevent="handleConfirm()">BOKA</button>
      </form>

      <div v-if="readybook" className="popup">
        <p>vill du bekräfta?</p>
        <button @click="submitBooking()">Ja</button>
        <button @click="readybook = false">Avbryt</button>
      </div>
    </div>
  </div>
</template>
