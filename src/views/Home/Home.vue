import type Menu from '@/components/Meny/Menu';

<script src="./Home.ts" lang="ts"></script>
<template>
  <Meny />

  <Suspense>
    <Booking />
  </Suspense>

  <Suspense>
    <Calender />
  </Suspense>
</template>
