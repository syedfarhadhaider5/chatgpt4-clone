import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdQtUFIQhOCS-74OudnZZaUq7Y_usB47w",
    authDomain: "chat-gpt-messagenger-farhad.firebaseapp.com",
    projectId: "chat-gpt-messagenger-farhad",
    storageBucket: "chat-gpt-messagenger-farhad.appspot.com",
    messagingSenderId: "572381995622",
    appId: "1:572381995622:web:d93e9c3efe7f24e71f83a7"
  };
  
  // Initialize Firebase
  const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app)
  export { db }

