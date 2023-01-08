import { defineComponent, ref, onMounted, nextTick } from "vue";
import { format } from "date-fns";
import { nanoid } from 'nanoid'
import {
  collection,
  orderBy,
  updateDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import { useuserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Booking",

  

  async setup() {
    
    const db = getFirestore();
    const uid = JSON.parse(sessionStorage.getItem("uid") || '{}');
    const todayDate = ref(new Date()).value;
    const thisDayDate = ref(format(todayDate, "E d MMMM")).value;
    const dateValue = ref(thisDayDate);
    const timeValue = ref("");
    const userStore = useuserStore();
    const { bookingIdStore } = storeToRefs(userStore);


   // finding todays date in DOM and centers it
    onMounted(() => {
      //path
      let DOMdate = document.querySelector(`div div.booking-container form div.box input[value="${thisDayDate}"]`);
      //scroll
      DOMdate?.scrollIntoView(({behavior: "smooth", inline: "center"}));
      
    })

    // get data from firebase and sort by timeID
    const dateRef = query(collection(db, "calender"), orderBy("timeID"));
    const snapshots = await getDocs(dateRef);
    const dateDocs = snapshots.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });

    // FUNCTION this is submit
    async function submitBooking() {
      // new ref from firebase that runs every submit
      const bookingRef = query(collection(db, "calender"));
      const snapshots = await getDocs(bookingRef);
      const bookingDocs = snapshots.docs.map((doc) => {
        const data = doc.data();
        return data;
      });
      // filter slot from firebase with date value from form
      const findSlot = bookingDocs.filter((f) => {
        if (f.date === dateValue.value) {
          return f;
        }
      });

      //get ref from firebase from collection "calender"
      const updateRef = doc(db, "calender", dateValue.value);

      // push to firebase from slot1
      if (timeValue.value === "07:00 till 11:00") {
        const slot1 = findSlot.map((b) => b.slot1.userid);
        if (slot1[0] === null) {
          alert("Success");
          await updateDoc(updateRef, {
            slot1: { userid: uid, bookingid: nanoid(), time: timeValue.value, date: dateValue.value },
          });
        } else {
          return alert("already booked");
        }
      }

      // push to firebase from slot2
      if (timeValue.value === "11:00 till 15:00") {
        const slot2 = findSlot.map((b) => b.slot2.userid);
        if (slot2[0] === null) {
          alert("Success");
          await updateDoc(updateRef, {
            slot2: { userid: uid, bookingid: nanoid(), time: timeValue.value, date: dateValue.value  },
          });
        } else {
          return alert("already booked");
        }
      }

      // push to firebase from slot3
      if (timeValue.value === "15:00 till 19:00") {
        const slot3 = findSlot.map((b) => b.slot3.userid);
        if (slot3[0] === null) {
          alert("Success");
          await updateDoc(updateRef, {
            slot3: { userid: uid, bookingid: nanoid(), time: timeValue.value, date: dateValue.value  },
          });
        } else {
          return alert("already booked");
        }
      }

      // push to firebase from slot4
      if (timeValue.value === "19:00 till 23:00") {
        const slot4 = findSlot.map((b) => b.slot4.userid);
        if (slot4[0] === null) {
          alert("Success");
          await updateDoc(updateRef, {
            slot4: { userid: uid, bookingid: nanoid(), time: timeValue.value, date: dateValue.value  },
          });
        } else {
          return alert("already booked");
        }
      }
    }
    // end of submit
    

    return {
      submitBooking,
      dateDocs,
      timeValue,
      dateValue,
      
      
    };
  },
});
