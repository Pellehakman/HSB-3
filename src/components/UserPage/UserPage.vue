<script src="./UserPage.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="flex-1 flex flex-col w-screen justify-center pl-12">
      <h1>Mina tvättider</h1>
      <h3>här finns dina tvättider</h3>
      <h3>dagens datum</h3>
    </div>

    <div class="booking-container w-screen">
      <div class="p-7 text-2xl text-white">
        <h2>Dina senaste bokningar</h2>
      </div>

      <div @click="handleActiveBooking"
        v-for="day in findBookings"
        className="datebox"
      >
        <div className="booking-item" :id="day.bookingid">
          {{ day.date }} {{ day.time }}
        </div>
      </div>
      <div class="btn-container">
        <button @click="handleEdit">ÄNDRA</button>

        <button @click="handleRemove">AVBOKA</button>

        <div class="btn-empty-lg"></div>
      </div>
    </div>
    <!-- <RouterLink to="/home">Tillbaka</RouterLink> -->

    <!-- <div>
    {{ BookingObject }}
  </div> -->
  </div>
</template>
