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
            'time-clean': props.passedActive === true,
            'time-free': timeItem.bookingid === null,
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
  <BookingDate @onDateUpdate="BookingDayData" />
</template>
