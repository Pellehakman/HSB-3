<script src="./BookingTime.ts" lang="ts"></script>

<template>
  <div className="booking-time-grid">
    <div v-for="(timeItem, index) in dateObject" :key="`dag_${index}`">
      <label className="">
        <input
          required
          :value="timeItem.time"
          type="radio"
          class="hidden peer"
          name="time"
          @change="timeUpdate"
          :disabled="timeItem.userid !== null ? true : false"
        />
        <div
          class="booking-time-item"
          :class="{
            'time-clean peer-checked:bg-gray-500': props.passedActive === true,
            'time-free peer-checked:bg-main-active':
              timeItem.bookingid === null && props.passedActive === false,
            'time-booked':
              timeItem.bookingid !== null && timeItem.userid !== uid,
            'time-you': timeItem.userid === uid,
            [`${timeItem.bookingid} animate-pulse bg-warning`]:
              userStore.editObject.bookingid === timeItem.bookingid,
          }"
        >
          {{ timeItem.time }}
        </div>
      </label>
    </div>
  </div>
</template>
