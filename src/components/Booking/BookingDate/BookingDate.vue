<script src="./BookingDate.ts" lang="ts"></script>

<template>
  <label class="flex relative snap-center ">
    <input
      class="peer absolute invisible right-16 z-10"
      ref="input"
      :value="date"
      type="radio"
      name="day"
      :checked="activeDate"
      @change="dateUpdate(date)"
    />
    <div class="booking-day-item">
      {{ date }}
    </div>
  </label>
</template>
