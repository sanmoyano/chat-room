import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCYzCx6WZdUStIqBaC3HnN-WD9f4YnNcM4',
  authDomain: 'chat-room-35180.firebaseapp.com',
  projectId: 'chat-room-35180',
  storageBucket: 'chat-room-35180.appspot.com',
  messagingSenderId: '582392203861',
  appId: '1:582392203861:web:81c69a6f14997575bf22dc',
  measurementId: 'G-EGCWGXV78J'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)/*eslint-disable-line*/

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
