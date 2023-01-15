<script src="./BookingDate.ts" lang="ts"></script>

<template>
  <label class="flex relative">
    <input
      class="peer absolute invisible right-16 z-10"
      ref="input"
      :value="date"
      type="radio"
      name="day"
      :checked="activeDate"
      @change="dateUpdate"
    />
    <div class="booking-day-style">
      {{ date }}
    </div>
  </label>
</template>
