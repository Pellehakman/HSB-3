<script src="./Meny.ts" lang="ts"></script>

<template>
  <!-- <button >MENY</button> -->

  <font-awesome-icon
    style="color: currentColor; font-size: 2rem"
    class="absolute right-6 top-6"
    icon="fa-solid fa-bars "
    @click="(showMenu = true), userStore.$reset()"
  />

  <div v-if="showMenu" class="menu-container">
    <div class="menu-fill"></div>
    <font-awesome-icon
      style="color: white; font-size: 2rem"
      class="absolute right-6 top-6"
      icon="fa-solid fa-xmark"
      @click="showMenu = false"
    />

    <div class="menu-items-list">
      <RouterLink class="menu-item-lg" @click="showMenu = false" to="/home"
        >Boka tvättid</RouterLink
      >
      <RouterLink class="menu-item-lg" @click="showMenu = false" to="/user"
        >Min sida</RouterLink
      >
      <RouterLink class="menu-item-lg" @click="showMenu = false" to="/home"
        >Upphittat</RouterLink
      >
      <RouterLink class="menu-item-lg" @click="showMenu = false" to="/home"
        >Felanmälan</RouterLink
      >

      <span class="h-px w-full bg-white opacity-30"></span>

      <label class="menu-item-s flex justify-center items-center"
        >Notiser
        <input class="w-12 h-5" type="checkbox" />
      </label>
      <div class="menu-item-s">English</div>
    </div>

    <div class="btn-container">
      <input
        type="button"
        class="btn-primary-lg"
        @click="SignOut()"
        value="Logga ut"
      />
      <div class="btn-empty-lg"></div>
    </div>
  </div>
</template>

<style></style>
