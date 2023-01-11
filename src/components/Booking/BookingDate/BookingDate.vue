<script src="./BookingDate.ts" lang="ts"></script>

<template>
    <label>
        <input ref="input" :value="date" type="radio" name="day" :checked="activeDate" @change="dateUpdate"  />
        <div>{{ date }}</div>
    </label>
</template>