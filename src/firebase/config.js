import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Steps to finish setup:
// 1. Enable Authentication → Sign-in method → Email/Password
// 2. Create Firestore Database (start in production mode, region: us-east1)
// 3. Set Firestore rules (allow read: true, allow write: if request.auth != null)
// 4. Add volunteer emails under Authentication → Users
const firebaseConfig = {
  apiKey: "AIzaSyDLjapJTp2uenrG6uUYJQQWuqd7pFloEYQ",
  authDomain: "igscf-8529e.firebaseapp.com",
  projectId: "igscf-8529e",
  storageBucket: "igscf-8529e.firebasestorage.app",
  messagingSenderId: "949103211802",
  appId: "1:949103211802:web:d2f0b0599f5d06008968a3"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
