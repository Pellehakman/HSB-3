<script src="./Login.ts" lang="ts"></script>

<template>
  <form class="screen-col-standard">
    <div class="flex flex-col justify-center items-center">
      <img class="mt-8 mb-6" src="../../assets/HSB_logo.svg" alt="" />
      <h1>Välkommen!</h1>
      <h4>Logga in för att boka en tvättid</h4>

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
      <button class="btn-primary-lg" @click.prevent="LoginSubmit()">
        Logga in
      </button>
      <div class="btn-clean-lg">
        <RouterLink to="/register"
          ><span class="font-normal">Inget Konto? </span>Skapa konto
          här!</RouterLink
        >
      </div>
    </div>
  </form>
</template>
