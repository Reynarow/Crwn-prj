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

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

