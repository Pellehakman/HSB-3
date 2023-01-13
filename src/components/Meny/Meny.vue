<script src="./Meny.ts" lang="ts"></script>

<template>
    
        <button @click="showMenu=true">MENY</button>
        
            <div v-if="showMenu" class="menu-container">
                <button @click="showMenu=false">STÄNG MENY</button>
                <RouterLink @click="showMenu=false" to="/home">Boka tvättid</RouterLink>
                <RouterLink @click="showMenu=false" to="/user">Mina tvättider</RouterLink>
                <RouterLink @click="showMenu=false" to="/home">Upphittat</RouterLink>
                <RouterLink @click="showMenu=false" to="/home">Felanmälan</RouterLink>
            </div>
           
     
</template>


<style>


</style>


