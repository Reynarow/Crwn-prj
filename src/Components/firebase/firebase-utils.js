import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCeSWJPc9Kyx4_G28FmhVjJmLD5nFun-sc",
    authDomain: "crwn-prj-cd827.firebaseapp.com",
    databaseURL: "https://crwn-prj-cd827.firebaseio.com",
    projectId: "crwn-prj-cd827",
    storageBucket: "crwn-prj-cd827.appspot.com",
    messagingSenderId: "1012535926648",
    appId: "1:1012535926648:web:d060ae3ba2b42d2695f28d",
    measurementId: "G-MSZC5EEZBJ"
};


export const createUserProfileDocument = async (userAuth,additionalData) =>{

    if (!userAuth) return;

    const useRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await useRef.get();
    
    if(!snapShot.exists){
        const {displayName , email} =userAuth;
        const createdAt = new Date();
        try {
            useRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error happend", error.message);
        }

    }
  return useRef;

}
   




firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

