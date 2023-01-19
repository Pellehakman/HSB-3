<script src="./Register.ts" lang="ts"></script>

<template>
  <form class="screen-col-standard">
    <div class="flex flex-col justify-center items-center">
      <img class="mt-8 mb-6" src="../../assets/HSB_logo.svg" alt="" />
      <h1>Välkommen!</h1>
      <h2>Registrera ny användare</h2>

      <div class="login-form-container">
        <input
          required
          class="input-form"
          v-model="email"
          type="email"
          placeholder="E-post"
        />

        <input
          required
          class="input-form"
          v-model="password"
          type="password"
          placeholder="Lösenord"
        />
        <p class="error-input">
          {{ displayErrors }}
        </p>
      </div>
    </div>

    <div class="btn-container">
      <button
        class="btn-primary-lg bg-yellow-500"
        @click.prevent="RegisterSubmit()"
      >
        Registrera
      </button>
      <div class="btn-empty-lg bg-transparent text-black font-normal">
        <RouterLink to="/login">Tillbaka</RouterLink>
      </div>
    </div>
  </form>
</template>
