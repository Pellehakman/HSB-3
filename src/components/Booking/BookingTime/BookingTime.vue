<script src="./BookingTime.ts" lang="ts"></script>

<template>
  <div className="">
    <label className="">
      <input
        required
        @change="timeUpdate"
        value="07:00 till 11:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="booking-time-style">07:00 till 11:00</div>
    </label>

    <label className="">
      <input
        required
        @change="timeUpdate"
        value="11:00 till 15:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="booking-time-style">11:00 till 15:00</div>
    </label>

    <label className="">
      <input
        required
        @change="timeUpdate"
        value="15:00 till 19:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="booking-time-style">15:00 till 19:00</div>
    </label>

    <label className="">
      <input
        required
        @change="timeUpdate"
        value="19:00 till 23:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="booking-time-style">19:00 till 23:00</div>
    </label>
  </div>
</template>
