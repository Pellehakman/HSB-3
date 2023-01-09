<script src="./Booking.ts" lang="ts"></script>

<template>
  <div>BOOKING</div>

  <form @submit.prevent="submitBooking">
    <div id="date" class="box">
      <div v-for="(date, index) in dateDocs" :key="`dag_${index}`">
        <BookingDay :todaysDate="dateValue" :date="date.date" @onItemScanned="searchCompleted"/>
        
        
        
      </div>
    </div>
    <label>
      <input
        v-model="timeValue"
        value="07:00 till 11:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="userlist">07:00 till 11:00</div>
    </label>

    <label>
      <input
        v-model="timeValue"
        value="11:00 till 15:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">11:00 till 15:00</div>
    </label>

    <label>
      <input
        v-model="timeValue"
        value="15:00 till 19:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">15:00 till 19:00</div>
    </label>

    <label>
      <input
        v-model="timeValue"
        value="19:00 till 23:00"
        type="radio"
        class="hidden peer"
        name="time"
      />
      <div class="">19:00 till 23:00</div>
    </label>

    <input value="BOKA" type="submit" />
  </form>

  <div></div>
</template>

<style>
.box {
  display: flex;
  height: 10rem;
  background-color: rgb(0, 0, 0);
  gap: 2rem;
  width: 20rem;
  overflow-x: scroll;
}
</style>
