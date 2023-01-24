<script src="./Help.ts" lang="ts"></script>

<template>
  <div :class="{ 'help-container': active, 'help-big': !active }">
    <button @click="active = !active">hek</button>
  </div>
</template>
