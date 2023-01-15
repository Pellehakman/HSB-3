import type Menu from '@/components/Meny/Menu';

<script src="./Home.ts" lang="ts"></script>
<template>
  <Meny />

  <Suspense>
    <Booking />
  </Suspense>
</template>

<!-- <Suspense>
      <Calender />
    </Suspense> -->
