import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC5s0tInVVKNaupp1Jn68nzeTQ_Z1zkxIM",
  authDomain: "bucketlist-9a138.firebaseapp.com",
  projectId: "bucketlist-9a138",
  storageBucket: "bucketlist-9a138.appspot.com",
  messagingSenderId: "239501927625",
  appId: "1:239501927625:web:87a17496ebe04e19281918",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
  prompt: "select_account",
});

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
