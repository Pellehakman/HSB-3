<script src="./Register.ts" lang="ts">

</script>

<template>
  <h1>Register</h1>
  <form>
    <input v-model="email" type="email" placeholder="email" />
    <input v-model="password" type="password" placeholder="password" />
    <input value="REGISTRERA" type="submit" @click.prevent="NewUser()"/>
    
  </form>
  
  <RouterLink to="/login">till login</RouterLink>
</template>
