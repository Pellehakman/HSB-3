import type Menu from '@/components/Meny/Menu';

<script src="./Home.ts" lang="ts"></script>
<template>
  <div class="h-screen flex flex-col justify-between bg-slate-600">
    <Meny />
    <div class="flex flex-1 justify-center flex-col pl-12">
      <h1 class="text-4xl font-bold">Tidsbokning</h1>
      <p class="text-2xl font-semibold ">Välkommen</p>
      <p class="text-lg font-semibold ">Måndag 11 december</p>
    </div>
    

    <Suspense>
      <Booking />
    </Suspense>

  </div>
</template>
<style></style>



    <!-- <Suspense>
      <Calender />
    </Suspense> -->