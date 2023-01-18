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
          :disabled="timeItem.bookingid != null ? true : false"
        />
        <div
          class="booking-time-item"
          :class="{
            'time-free': timeItem.bookingid === null,
            'time-booked': timeItem.bookingid != null,
            'bg-green-600': timeItem.userid === uid,
            'time-edit': userStore.editObject.time === timeItem.time,
          }"
        >
          {{ timeItem.time }}
        </div>
      </label>
    </div>
  </div>
</template>
