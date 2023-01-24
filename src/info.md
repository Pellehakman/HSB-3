{
    // "files.eol": "\n",
    
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      },
    "eslint.validate": [
        "javascript"
    ],
    "files.eol": "\n"
  
   
}

   class="peer invisible"



git config core.autocrlf false 
git rm --cached -r . 
git reset --hard

Review 

useUserStore


Login.ts 
- Switch statement
- Color contrast på login & registerara
- Async request

Firebase 
- Service istället för component, kan ligga under ny mapp som heter services 
- Måste den hämtas i varje component? Och läsa in som component ? 
- Varningar om missing template/render 
- Vuefire ? https://vuefire.vuejs.org/ 
https://www.bezkoder.com/vue-3-firebase/ 

UserStore - Mer Types? 
- Exempel userStore.editObject


Booking.vue
- HandlePopup - enum med computed properties istället för string check i -.vue filen 

Models 
- Hade döpt filerna til vad för model det är - så models.ts hade jag döpt om till fireTypeModel.ts

Vad är functions? 


BookingDate
 dateUpdate - const a / b /c / d genomför samma funktion men med olika parametrar.