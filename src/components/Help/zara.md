fixa useuserstore.

          const errorMessage = getErrorMessage(error.code);
          if (!errorMessage) {
            return;
          }
          displayErrors.value = errorMessage;


   

    function getErrorMessage(errorCode: string): string {
      switch(errorCode) {
        case "auth/wrong-password":
        case "auth/user-not-found":
        case "auth/invalid-email":
          return "Felaktigt användarnamn eller lösenord.";
          break;
        default:
          return "";
      }
    }


    kolla async await promise på inlogg!

    ENUM för sträng-checkar
      const handlePopupIsConfirm = computed(() => handlePopup.value === PopupState.CONFIRMED)


export enum PopupState {
  TOO_MANY = 'Too_many',
  CONFIRMED = 'Confirmed',
  EMPTY = ''
}


fixa semantisk html.

section alltid heading.


