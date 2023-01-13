
import type Menu from '@/components/Meny/Menu';

<script src="./Home.ts" lang="ts"></script>
<template>
  <div>
 
    
    <Meny />
    <h1>Tidsbokning</h1>
    <p>Välkommen</p>
    <p>Måndag 11 december</p>
    
    
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
