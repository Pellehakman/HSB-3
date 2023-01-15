<script src="./Meny.ts" lang="ts"></script>

<template>
  <!-- <button >MENY</button> -->

  <font-awesome-icon
    style="color: currentColor; font-size: 2rem"
    class="absolute right-6 top-6"
    icon="fa-solid fa-bars "
    @click="showMenu = true"
  />

  <div
    v-if="showMenu"
    class="bg-blue-500 h-screen w-screen absolute flex flex-col justify-center z-20"
  >
    <font-awesome-icon
      style="color: white; font-size: 2rem"
      class="absolute right-6 top-6"
      icon="fa-solid fa-xmark"
      @click="showMenu = false"
    />

    <div
      class="flex flex-col pt-52 ml-10 mr-10 items-start main-menu-font gap-6"
    >
      <RouterLink v @click="showMenu = false" to="/home"
        >Boka tvättid</RouterLink
      >
      <RouterLink @click="showMenu = false" to="/user">Min sida</RouterLink>
      <RouterLink @click="showMenu = false" to="/home">Upphittat</RouterLink>
      <RouterLink @click="showMenu = false" to="/home">Felanmälan</RouterLink>

      <span class="h-px w-full bg-white mt-10 mb-10 opacity-30"></span>

      <label class="text-xl flex justify-center items-center"
        >Notiser
        <input class="w-12 h-5" type="checkbox" />
      </label>
      <div class="text-xl">English</div>
    </div>

    <div class="flex justify-center pb-20">
      <button
        class="p-4 w-64 rounded-md text-white bg-red-700 hover:bg-red-800 font-medium text-base"
        @click="SignOut"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<style></style>
