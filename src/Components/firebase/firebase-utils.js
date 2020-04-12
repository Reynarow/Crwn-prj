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




export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error happend", error.message);
        }

    }
    return userRef;

}



export const auth = firebase.auth();
export const firestore = firebase.firestore();




export const getCurrectUser = () =>{
    return new Promise((resolve,reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        },reject)
    });
}



export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);






export const addCollectionAndItems = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);
    });
    batch.commit();
}

export const convertCollectiosSnapshotToMap = (collections) => {
    const transformedColletion = collections.docs.map(doc => {
        const { items, title } = doc.data()
        return {
            items,
            title,
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id

        }
    })
   return transformedColletion.reduce((accumulator , collection) =>{
    accumulator[collection.title.toLowerCase()]=collection
    return accumulator
   }
    ,{})
}



export default firebase;

