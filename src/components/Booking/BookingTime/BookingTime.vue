<script src="./BookingTime.ts" lang="ts"></script>

<template>
  <div className="booking-time-grid">
    <div
      class="hej"
      v-for="(timeItem, index) in dateObject"
      :key="`dag_${index}`"
    >
      <label className="">
        <input
          required
          :value="timeItem.time"
          type="radio"
          class="hidden peer"
          name="time"
          @change="timeUpdate"
        />
        <div
          class="booking-time-item"
          :class="{
            'time-item-booked': timeItem.bookingid != null,
            'time-item-yours': timeItem.userid === uid,
          }"
        >
          {{ timeItem.time }}
        </div>
      </label>
    </div>
  </div>
</template>
