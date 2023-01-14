<script src="./Meny.ts" lang="ts"></script>

<template>
  <!-- <button >MENY</button> -->

  <font-awesome-icon icon="fa-solid fa-bars" @click="showMenu = true" />
  <div v-if="showMenu" class="menu-container">
    <font-awesome-icon icon="fa-solid fa-xmark" @click="showMenu = false" />
    <RouterLink @click="showMenu = false" to="/home">Boka tvättid</RouterLink>
    <RouterLink @click="showMenu = false" to="/user">Mina tvättider</RouterLink>
    <RouterLink @click="showMenu = false" to="/home">Upphittat</RouterLink>
    <RouterLink @click="showMenu = false" to="/home">Felanmälan</RouterLink>
    <button @click="SignOut">Sign Out</button>
  </div>
</template>

<style></style>
