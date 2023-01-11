<script src="./Booking.ts" lang="ts"></script>

<template>
  <h1 v-if="awesome">Ändra tid</h1>
  <h1 v-else>Välj tid att boka</h1>

  <form className="form-container">
    <div id="date" class="box">
      <div v-for="(date, index) in dateDocs" :key="`dag_${index}`">
        <BookingDate
          :todaysDate="dateValue"
          :date="date.date"
          @onDateUpdate="BookingDayData"
        />
      </div>
    </div>
    <BookingSlot @onTimeUpdate="BookingTimeData" />

    <button class="main-btn" @click.prevent="submitBooking()">BOKA</button>
  </form>

  <div></div>
</template>

<style>
.main-btn {
  display: flex;
  width: 10rem;
  justify-content: center;
  padding: 1rem;
  background-color: green;
  color: white;
  text-align: center;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  display: flex;
  height: 10rem;
  background-color: rgb(0, 0, 0);
  gap: 2rem;
  width: 20rem;
  overflow-x: scroll;
}
</style>
