<script src="./UserPage.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="hero">
      <h1>Mina tvättider</h1>
      <h4>Här finns dina tvättider</h4>
      <h5>{{ thisDayDate }}</h5>
    </div>

    <div class="booking-container w-screen">
      <div class="p-6 text-2xl text-white">
        <h2>Dina senaste bokningar</h2>
      </div>

      <div class="userPage-item-container">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div @click="handleActiveBooking" v-for="day in findBookings" class="">
          <label>
            <input
              name="user"
              type="radio"
              class="hidden peer"
              :id="day.bookingid"
            />
            <div class="userPage-item">{{ day.date }} {{ day.time }}</div>
          </label>
        </div>
      </div>
      <div class="btn-container items-center justify-center">
        <div v-if="displayBtn === false" class="btn-empty-lg"></div>
        <div v-if="displayBtn === true" class="flex w-72 gap-4">
          <button class="btn-primary-lg bg-warning" @click="handleEdit">
            Ändra tid
          </button>

          <button class="btn-remove-lg" @click="handleRemove">Avboka</button>
        </div>
        <RouterLink
          @click="userStore.$reset()"
          class="btn-clean-lg text-white"
          to="/home"
          >Tillbaka</RouterLink
        >
      </div>
      <div
        v-if="handlePopup === 'handleRemove'"
        className="booking-confirm-container "
      >
        <div class="flex flex-col self-start gap-1">
          <h2 class="text-3xl">Avboka tid</h2>
          <h4>Vill du ta bort denna tid?</h4>
          <h5>{{ activeBooking.time }} {{ activeBooking.date }}</h5>
        </div>
        <div class="btn-container">
          <input
            type="button"
            class="btn-primary-lg bg-error"
            @click="submitRemove()"
            value="Ja, avboka"
          />
          <div class="btn-clean-lg">
            <button @click="handlePopup = ''">Avbryt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
