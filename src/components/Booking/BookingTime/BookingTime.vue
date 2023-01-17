<script src="./BookingTime.ts" lang="ts"></script>

<template>
  <div className="booking-time-grid">
    <div class="hej" v-for="(timeItem, index) in hej" :key="`dag_${index}`">
      <label className="">
        <input
          @change="timeUpdate"
          required
          :value="timeItem.time"
          :userid="timeItem.userid"
          type="radio"
          class="hidden peer"
          name="time"
        />
        <div class="booking-time-item">
          {{ timeItem.date }}
          {{ timeItem.time }}
        </div>
      </label>
    </div>
  </div>
</template>
