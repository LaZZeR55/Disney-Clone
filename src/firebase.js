import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALlgPrEw5GwRxJLvkTw4siXWuCxM4s7t4",
  authDomain: "disney-plus-clone-af789.firebaseapp.com",
  projectId: "disney-plus-clone-af789",
  storageBucket: "disney-plus-clone-af789.appspot.com",
  messagingSenderId: "414372392836",
  appId: "1:414372392836:web:d87f5013cb82c307d7b7d1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
