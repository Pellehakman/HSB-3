<script src="./BookingTime.ts" lang="ts"></script>

<template>
  <div className="time-container">
    <label className="time-item">
      <input
        @change="timeUpdate"
        ref="input"
        :checked="activeTime"
        value="07:00 till 11:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="userlist">07:00 till 11:00</div>
    </label>

    <label className="time-item">
      <input
        @change="timeUpdate"
        ref="input"
        :checked="activeTime"
        value="11:00 till 15:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">11:00 till 15:00</div>
    </label>

    <label className="time-item">
      <input
        @change="timeUpdate"
        ref="input"
        :checked="activeTime"
        value="15:00 till 19:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">15:00 till 19:00</div>
    </label>

    <label className="time-item">
      <input
        @change="timeUpdate"
        ref="input"
        :checked="activeTime"
        value="19:00 till 23:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">19:00 till 23:00</div>
    </label>
  </div>
</template>

<style>
.time-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.time-item {
  margin: 0.5rem;
  background-color: rgb(37, 37, 37);
  display: flex;
  padding: 1.6rem;
}
</style>
