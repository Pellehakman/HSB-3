<script src="./Login.ts" lang="ts">


</script>

<template>

  <img class="mt-14" src='../../assets/HSB_logo.svg' alt='' />
  <h1 class="main-h1">Välkommen!</h1>
  <h2 class="main-h2">Logga in för att boka en tvättid!</h2>
  
  <form class="flex flex-col mt-14">
    
   
    <input required class="p-4 w-64 rounded-md text-base" v-model="email" type="email" placeholder="E-post" />
    <p class="flex h-4 text-xs justify-end mt-3 mb-3 font-medium text-red-600">{{ emlErrors }}</p>
 
    <input required class="p-4 w-64 rounded-md text-base" v-model="password" type="password" placeholder="Lösenord" />
    <p class="flex h-4 text-xs justify-end mt-3 mb-3 font-medium text-red-600">{{ pswErrors }}</p>


    <div class="mt-44">
      <button class="p-4 w-64 rounded-md text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-base " @click.prevent="LoginSubmit()">Logga in</button>
      <div class="flex justify-center place-self-center">
        <RouterLink class="text-xs mt-4" to="/register">Inget Konto? Skapa konto här!</RouterLink>
      </div>
    </div>
    
    
  </form>
  <!-- <p class="list-group alert alert-danger" v-if="errors.length > 0">
        
           {{ errors }}
        
  </p> -->
  
</template>
