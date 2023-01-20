<script src="./Booking.ts" lang="ts"></script>

<template>
  <div class="screen-col-standard">
    <div class="hero">
      <h1>Tidsbokning</h1>
      <h4>Välkommen</h4>
      <h5>{{ thisDayDate }}</h5>
    </div>

    <div class="booking-container">
      <div class="p-6 text-2xl text-white">
        <h2 v-if="handleEdit">Ändra tid</h2>
        <h2 class="text-inherit" v-else>Välj tid för att boka</h2>
      </div>

      <form class="flex flex-col items-center justify-center">
        <div id="date" class="booking-day snap-mandatory snap-x">
          <div class="booking-day-chevron-l">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </div>

          <Suspense>
            <div
              class=""
              v-for="(date, index) in dateDocs"
              :key="`dag_${index}`"
            >
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

        <span class="divider"></span>
        <div class="">
          <Suspense>
            <BookingTime
              @onTimeObj="BookingTimeData"
              :dateObject="dateObject"
            />
          </Suspense>
        </div>
        <div class="guide-container">
          <div class="flex items-center">
            <section
              class="guide-bullet border border-white border-opacity-50"
            ></section>
            <p class="ml-2">Ledig tider</p>
          </div>
          <div class="flex items-center">
            <section class="guide-bullet bg-error"></section>
            <p class="ml-2">Bokat</p>
          </div>
          <div class="flex items-center">
            <section class="guide-bullet bg-success"></section>
            <p class="ml-2">Dina bokningar</p>
          </div>
        </div>
        <div class="btn-container">
          <input
            type="button"
            :value="`${btnMsg}`"
            :disabled="timeValue.length < 1 ? true : false"
            :class="{
              'bg-gray-500 text-gray-600': timeValue.length < 1,
              'bg-success': timeValue.length > 1,
            }"
            class="btn-primary-lg"
            @click.prevent="handleConfirm()"
          />

          <input
            type="button"
            v-if="handleEdit === true"
            @click="abortEdit"
            class="btn-clean-lg text-white"
            value="Avbryt"
          />
          <div v-if="handleEdit === false" class="btn-empty-lg"></div>
        </div>
      </form>

      <div
        v-if="handlePopup === 'confirm'"
        className="booking-confirm-container "
      >
        <div class="flex flex-col self-start gap-1">
          <h2 class="text-3xl">Bekräfta bokning</h2>
          <h3>Vill du boka denna tid?</h3>
          <h5>{{ timeValue }} {{ dateValue }}</h5>
        </div>
        <div class="btn-container">
          <input
            type="button"
            class="btn-primary-lg"
            @click="submitBooking()"
            value="Ja, boka!"
          />

          <div class="btn-clean-lg">
            <button @click="handlePopup = ''">Avbryt</button>
          </div>
        </div>
      </div>

      <div
        v-if="handlePopup === 'tooMany'"
        className="booking-confirm-container "
      >
        <div class="flex flex-col self-start gap-1">
          <h2 class="text-3xl">Varning</h2>
          <h4>
            Du har nått maximalt antal bokningar. Gå till
            <span class="font-bo">mina sidor</span> och ta bort befintlig
            bokning för att boka igen.
          </h4>
        </div>
        <div class="btn-container">
          <div class="btn-clean-lg">
            <button @click="handlePopup = ''">Avbryt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
