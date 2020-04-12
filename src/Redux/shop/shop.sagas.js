import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectiosSnapshotToMap } from '../../Components/firebase/firebase-utils'

import {
    fetchCollectionSuccess,
    fetchCollectionFailure,
} from './shop.action';



import ShopActionTypes from './shop.types';



export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectiosSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }

}





export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}