import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userActionTypes } from './user.types';

import { auth, provider, createUserProfileDocument, getCurrectUser } from '../../Components/firebase/firebase-utils';

import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './user.action'


export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}



export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(provider);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrectUser()
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}


export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {

        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
         yield put(signUpSuccess({user,additionalData:{displayName}}))   
    }
    catch (error) {
       yield put(signUpFailure(error))
    }
}


export function* signInAfterSignUp({payload:{user,additionalData}}){
    try{
        yield getSnapShotFromUserAuth(user,additionalData)
    }catch(error){
        yield put(signUpFailure(error))
    }
}






export function* onGoogelSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUPSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}



export function* userSagas() {
    yield all([
        call(onGoogelSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUPSuccess)
    ])
}