import React, { useState } from 'react';
import FormInput from '../form-input/Form-input.component';
import CustomButton from "../Custom-button/Custom-button.compnent";
import { signUpStart } from '../../Redux/user/user.action'
import "./Sign-up.styles.scss";

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectSignUpLoading } from '../../Redux/user/user.selector';



const  SignUp= ({ signUpStart ,loading }) => {

  const [userCredential , setUserCredential] = useState({email:'' , password:'',confirmPassword:'', displayName:''})
  
  const {email,password,confirmPassword,displayName} = userCredential;


   const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredential( { ...userCredential ,[name]: value  })
    }

   const  handleSubmit =  (event) => {
        event.preventDefault();
   
        if (password !== confirmPassword) {
            alert("check your passwords don't match :)");
            return;
        }


        signUpStart({ email, password, displayName })


      
    }

   
        return (
            <div className="sign-up">
                <h2 className="title">I dont have account</h2>
                <span className="subtitle">Sign up with your email and password</span>
                <form onSubmit={handleSubmit} >
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={handleChange}
                        lable="displayName"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        lable="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        lable="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleChange}
                        lable="confirm password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" isLoading={loading}  >Sign UP</CustomButton>
                    </div>

                </form>
            </div>
        )
    }


const mapStateToProps = createStructuredSelector({
    loading: selectSignUpLoading
})



const mapDispatchToProps = dispatch => ({
    signUpStart: ({ email, password, displayName }) => dispatch(signUpStart({ email, password, displayName }))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);