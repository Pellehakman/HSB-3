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
    <div class=" w-32 h-16 flex items-center text-center text-white font-medium  peer-checked:bg-cyan-700 select-none cursor-pointer rounded-lg border-solid border border-gray-400">{{ date }}</div>
  </label>
</template>



