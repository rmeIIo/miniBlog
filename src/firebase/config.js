import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWSr1aKT9QXjvs8BXIVsRIPxgR1APPX-8",
  authDomain: "miniblog-56c7d.firebaseapp.com",
  projectId: "miniblog-56c7d",
  storageBucket: "miniblog-56c7d.appspot.com",
  messagingSenderId: "923165097329",
  appId: "1:923165097329:web:ca9fbcc6c59cc749a04ad0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
