<script src="./BookingView.ts" lang="ts"></script>
<template>
  <div class="about">
    <h1>This is booking</h1>
    <Suspense>
      <Booking />
 </Suspense>
    
    <Calender />
    <button @click="SignOut">Sign Out</button>
  </div>
</template>


