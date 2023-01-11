<script src="./BookingDate.ts" lang="ts"></script>

<template>
  <label >
    <input
      ref="input"
      :value="date"
      type="radio"
      name="day"
      :checked="activeDate"
      @change="dateUpdate"
    />
    <div class="lab">{{ date }}</div>
  </label>
</template>

<style>
.lab{
  display: flex;
  background-color: rgb(80, 79, 78);
  width: 7rem;
  height: 4rem;
}
</style>