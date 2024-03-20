import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBeQ5lXPdYvF9fVMiY27HYhAGf89GwIj0o",
  authDomain: "scissors-app-altschool.firebaseapp.com",
  projectId: "scissors-app-altschool",
  storageBucket: "scissors-app-altschool.appspot.com",
  messagingSenderId: "189214995105",
  appId: "1:189214995105:web:81cea7ada63971fe8636e0",
  measurementId: "G-9B70T6BKCL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = require('firebase/app');
// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Function to sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    throw new Error('Google sign-in failed');
  }
};


// Function to sign in with Apple
export const signInWithApple = async () => {
  try {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    // Add additional scopes if needed
    provider.addScope('email');
    provider.addScope('name');
    await signInWithPopup(auth, provider);
  } catch (error) {
    // Handle errors
    console.error('Error signing in with Apple:', error);
  }
};

export default app;