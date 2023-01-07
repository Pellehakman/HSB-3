<script src="./BookingView.ts" lang="ts"></script>
<template>
  <div class="booking-container">
    <h1>This is booking</h1>

   <Central />

    <Suspense>
      <Booking />
    </Suspense>
    
    <Suspense>
      <Calender />
    </Suspense>

    <button @click="SignOut">Sign Out</button>
  </div>
</template>
<style></style>
