import React from 'react';
import SignIn from '../../Components/Sign-in/Sign-in.component';
import SignUp from '../../Components/Sign-up/Sign-up.component';
import './Sign-in-Sign-up.styles.scss';


const SignInSignUpPage = ({currentUser}) =>(

    <div className="sign-in-sign-up">
        <SignIn currentUser={currentUser}/>
        <SignUp />
    </div>


);




export default SignInSignUpPage;