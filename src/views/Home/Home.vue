
import type Menu from '@/components/Menu/Menu';

<script src="./Home.ts" lang="ts"></script>
<template>
  <div class="booking-container">
    <h1>This is booking</h1>

   
  

    
    

    
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
