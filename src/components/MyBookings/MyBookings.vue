<script src="./MyBookings.ts" lang="ts"></script>

<template>
    
    <h1>this is my page</h1>
    <RouterLink to="/booking">Tillbaka</RouterLink>
   
    <div v-for="day in findBookings" className="datebox" >
        <div >
            <div className="gap" :id="day.bookingid">{{ day.date }} {{ day.time }} </div> 
            
        </div>
        
        
    
    </div>
    

</template>

<style>
.datebox{
    background-color: aqua;
    color: black;
    gap: 1rem;
    
}
.gap{
    
    margin: 1rem;
}

</style>