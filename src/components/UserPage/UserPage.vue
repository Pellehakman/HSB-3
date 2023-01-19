<script src="./UserPage.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="hero">
      <h1>Mina tvättider</h1>
      <h3>här finns dina tvättider</h3>
      <h3>{{ thisDayDate }}</h3>
    </div>

    <div class="booking-container w-screen">
      <div class="p-7 text-2xl text-white">
        <h2>Dina senaste bokningar</h2>
      </div>

      <div class="userPage-item-container">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div @click="handleActiveBooking" v-for="day in findBookings" class="">
          <label>
            <input
              name="user"
              type="radio"
              class="hidden peer"
              :id="day.bookingid"
            />
            <div class="userPage-item">{{ day.date }} {{ day.time }}</div>
          </label>
        </div>
      </div>
      <div class="btn-container items-center">
        <button class="btn-primary-lg" @click="handleEdit">ÄNDRA</button>

        <button class="btn-empty-lg" @click="handleRemove">AVBOKA</button>
      </div>
    </div>
  </div>
</template>
