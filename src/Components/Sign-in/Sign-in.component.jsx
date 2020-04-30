import React, { useState } from 'react';
import './Sign-in.styles.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.compnent';
import { createStructuredSelector } from 'reselect';
import { selectSignInLoading } from '../../Redux/user/user.selector'
import { googleSignInStart, emailSignInStart } from '../../Redux/user/user.action'


const SignIn = ({ emailSignInStart, loading, googleSignInStart }) => {

    const [userCredential, setUserCredential] = useState({ email: '', password: '' })

    const { email, password } = userCredential;



    const handleSubmit = (event) => {

        event.preventDefault();

        emailSignInStart(email, password);

        setUserCredential({
           ...userCredential, password: '',
        })
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredential({
           ...userCredential ,[name]: value
        })
    }


    return (

        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span className="subtitle">Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    lable='email'
                    handleChange={handleChange}
                    required
                />

                <FormInput
                    name='password'
                    type='password'
                    lable='password'
                    value={password}
                    handleChange={handleChange}
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit" isLoading={loading}>Submit Form</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>

                </div>


            </form>


        </div>

    );
}





const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

const mapStateToProps = createStructuredSelector({
    loading: selectSignInLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


