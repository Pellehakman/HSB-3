<script src="./Booking.ts" lang="ts"></script>

<template>
  <div>BOOKING</div>

  <form @submit.prevent="submitBooking()">
    <div id="date" class="box">
      <div v-for="(date, index) in dateDocs" :key="`dag_${index}`">
        <BookingDay :todaysDate="dateValue" :date="date.date" @onDateUpdate="BookingDayData"/>
      </div>
    </div>
    <BookingSlot @onTimeUpdate="BookingTimeData" />
    

    <input value="BOKA" type="submit" />
  </form>

  <div></div>
</template>

<style>
.box {
  display: flex;
  height: 10rem;
  background-color: rgb(0, 0, 0);
  gap: 2rem;
  width: 20rem;
  overflow-x: scroll;
}
</style>
