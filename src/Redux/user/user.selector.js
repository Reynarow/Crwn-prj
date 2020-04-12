import {createSelector} from 'reselect';


const selectUser = state =>state.user ; 


export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)


export const selectSignInLoading = createSelector(
    [selectUser],
    user => user.signInLoading
)

export const selectSignUpLoading = createSelector(
    [selectUser],
    user=> user.signUpLoading
)