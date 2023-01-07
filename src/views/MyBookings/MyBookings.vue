<script src="./MyBookings.ts" lang="ts"></script>

<template>
    
    <h1>my page</h1>
    <RouterLink to="/booking">Tillbaka</RouterLink>
    <div v-for="day in ida" >
        <div>{{ day.date }}</div> 
        <div>{{ day.slot1.time }}</div> 
    
    </div>
    

</template>