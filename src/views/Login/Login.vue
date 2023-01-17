<script src="./Login.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="flex flex-col justify-center items-center">
      <img class="mt-20 mb-6" src="../../assets/HSB_logo.svg" alt="" />
      <h1>Välkommen!</h1>
      <h2>Logga in för att boka en tvättid!</h2>

      <form class="flex flex-col mt-12 gap-3">
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
      </form>
    </div>

    <div class="btn-container">
      <button class="btn-primary-lg" @click.prevent="LoginSubmit()">
        Logga in
      </button>
      <div class="btn-empty-lg bg-transparent text-black font-normal">
        <RouterLink to="/register">Inget Konto? Skapa konto här!</RouterLink>
      </div>
    </div>
  </div>
</template>
