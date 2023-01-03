<script src="./Booking.ts" lang="ts"></script>

<template>
    <div>BOOKING </div>
    <div>
        <label v-for="day in data" class="bg-blue-400">
                <input 
                    
                    :value="day"
                    type="radio"
                    class="hidden peer " 
                    name="day"
                    />
                    
                <div 
                    class="peer-checked:bg-red-600 select-none cursor-pointer">{{ day.date }}
            </div> 
            </label>

    </div>
    <!-- <button @click="createDate">createDate</button> -->
</template>