<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="flex-1 flex flex-col w-screen justify-center pl-12">
      <h1 class="text-5xl">Tidsbokning</h1>
      <h2>Välkommen</h2>
      <h3>{{ thisDayDate }}</h3>
    </div>

    <div class="booking-container">
      <div class="p-7 text-2xl text-white">
        <h2 v-if="handleEdit">Ändra tid</h2>
        <h2 class="text-inherit" v-else>Välj tid för att boka</h2>
      </div>

      <form class="flex flex-col items-center justify-center gap-6">
        <div id="date" class="booking-day">
          <div class="booking-day-chevron-l">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </div>

          <Suspense>
            <div v-for="(date, index) in dateDocs" :key="`dag_${index}`">
              <BookingDate
                :todaysDate="dateValue"
                :date="date.date"
                @onDateUpdate="BookingDayData"
                @onDateObj="DateObj"
              />
            </div>
          </Suspense>

          <div class="booking-day-chevron-r">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
        </div>

        <span class="h-px w-4/5 bg-white opacity-30"></span>
        <div class="">
          <Suspense>
            <BookingTime
              @onTimeObj="BookingTimeData"
              :dateObject="dateObject"
            />
          </Suspense>
        </div>
        <div class="btn-container">
          <button class="btn-primary-lg" @click.prevent="handleConfirm()">
            Boka tid
          </button>
          <div class="btn-empty-lg"></div>
        </div>
      </form>

      <div
        v-if="readybook"
        className="booking-confirm-container flex-col flex justify-between items-center pt-8 px-8 "
      >
        <div class="flex flex-col self-start gap-1">
          <h1 class="text-4xl">Bekräfta bokning</h1>
          <h2 class="font-bold">Vill du boka denna tid?</h2>
          <h2 class="font-normal">{{ timeValue }}</h2>
          <h2 class="font-normal">{{ dateValue }}</h2>
        </div>
        <div class="btn-container">
          <button class="btn-primary-lg" @click="submitBooking()">
            Ja, boka!
          </button>

          <div class="btn-empty-lg">
            <button @click="readybook = false">Avbryt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
