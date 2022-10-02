// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHmMuxN4NLaL6kjQIQxxyfmGqYkCBlLNI",
  authDomain: "crwn-clothing-ztm-db-9078f.firebaseapp.com",
  projectId: "crwn-clothing-ztm-db-9078f",
  storageBucket: "crwn-clothing-ztm-db-9078f.appspot.com",
  messagingSenderId: "188792845415",
  appId: "1:188792845415:web:37c18384636ba2b37610c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(authUser, additionalInformation = {}) => {
  if(!authUser) return ;
  const userRefDoc = doc(db, 'users', authUser.uid);
  const userSnapShot = await getDoc(userRefDoc);
  
  if(!userSnapShot.exists()){
    const {displayName, email} = authUser;
    const createdAt = new Date();

    try {
      alert(additionalInformation);
      setDoc(userRefDoc, { displayName, email, createdAt,...additionalInformation }) ;
      
    } catch (error) {
      console.log("process of recording users datum failed " + error.message);
    }
  }
  return userRefDoc;
}

export const createUserWithEmailAndPasswordAuth = async(email , password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};