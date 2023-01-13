<script src="./App.ts" lang="ts">

</script>

<template>
   <button @click="showMenu = true">MENY</button>
        
        <div v-if="showMenu" class="menu-container">
          <Menu  @onCloseUpdate="closeUpdate"/>
          <button  @click="showMenu = false">close menu</button>
        </div>
 
  <RouterView />
</template>

<style>
.menu-container{
 display: flex;
 flex-direction: column;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 1000;
    width: 20rem;
    height: 30rem;
background-color: blueviolet;

}
</style>