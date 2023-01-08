<script src="./MyBookings.ts" lang="ts"></script>

<template>
  <h1>this is my page</h1>
  <RouterLink to="/home">Tillbaka</RouterLink>

  <div
    @click="handleActiveBooking"
    v-for="day in findBookings"
    className="datebox"
  >
    <div className="gap" :id="day.bookingid">{{ day.date }} {{ day.time }}</div>
  </div>

  <button @click="handleEdit">ÄNDRA</button>

  <button @click="handleRemove">AVBOKA</button>

  <!-- <div>
    {{ BookingObject }}
  </div> -->
</template>

<style>
.datebox {
  background-color: aqua;
  color: black;
  gap: 1rem;
}
.gap {
  cursor: pointer;
  margin: 1rem;
}
</style>
