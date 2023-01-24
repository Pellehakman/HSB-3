<script src="./Help.ts" lang="ts"></script>

<template>
  <div>
    <div
      :class="{
        'help-container': active,
        'help-container help-big z-20': !active,
      }"
    ></div>
    <p @click="active = !active" class="help-container">{{ helpText }}</p>

    <p
      v-if="active === false"
      @click="active = !active"
      class="help-container z-50 bg-booking text-white"
    >
      Stäng
    </p>
    <h2 v-if="active === false" class="absolute z-50 transition duration-1000">
      Instruktioner
    </h2>
  </div>
</template>
