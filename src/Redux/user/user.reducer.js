import { userActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    signInLoading: false,
    signUpLoading:false,
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case userActionTypes.EMAIL_SIGN_IN_START:

            return {
                ...state,
                error:null,
                signInLoading: true
            }

        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                signInLoading: false
            }

        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                signInLoading: false,
                signUpLoading:false,
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }

            case userActionTypes.SIGN_UP_START:
                return{
                    ...state,
                    error:null,
                    signUpLoading:true
                }
            case userActionTypes.SIGN_UP_SUCCESS:
                return{
                    ...state,
                    signUpLoading:false
                }    
                case userActionTypes.SET_ERROR_NULL:
                    return{
                        ...state,
                        error:null,
                    }

        default:
            return state;
    }
}


export default userReducer;