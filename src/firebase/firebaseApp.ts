// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIY9lljgZ4hVTQ44ybow0-WQdSu9xrdTQ',
  authDomain: 'students-965dc.firebaseapp.com',
  projectId: 'students-965dc',
  storageBucket: 'students-965dc.appspot.com',
  messagingSenderId: '943705462818',
  appId: '1:943705462818:web:ac36ecab55d2b67d47927b',
  databaseURL:
    'https://students-965dc-default-rtdb.asia-southeast1.firebasedatabase.app',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
