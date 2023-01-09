<script src="./BookingDay.ts" lang="ts"></script>

<template>
    <label>
        <input ref="input" :value="date" type="radio" name="day" :checked="activeDate" @change="selectedDate" />
        <div>{{ date }}</div>
    </label>
</template>