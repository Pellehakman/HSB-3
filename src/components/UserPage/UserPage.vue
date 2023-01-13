<script src="./UserPage.ts" lang="ts"></script>

<template>
  <h1>Mina tvättider</h1>
  <h3>här finns dina tvättider</h3>
  <h3>dagens datum</h3>
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
<!-- 
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
</style> -->
