import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})


export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
    payload:errorMessage,
})

//thunk - refactor with sagas

// export const fetchCollectionStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(snapShot => {
//             const collectionMap = convertCollectiosSnapshotToMap(snapShot);
//             dispatch(fetchCollectionSuccess(collectionMap));


//         })
//         .catch(error => dispatch(fetchCollectionFailure(error.message)));

//     }
// }