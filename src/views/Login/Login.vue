<script src="./Login.ts" lang="ts">

</script>

<template>
  <h1>This is Login</h1>
  
  <form>
    <input v-model="email" type="email" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <input value="LOGGA IN" type="submit" @click.prevent="LoginSubmit()"/>
    
  </form>
  <p class="list-group alert alert-danger" v-if="errors.length > 0">
        
           {{ errors }}
        
  </p>
  <RouterLink to="/register">register</RouterLink>
</template>
