import React from 'react';

import './Sign-in.styles.scss';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.compnent';
import {signInWithGoogle , auth} from '../firebase/firebase-utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async(event) => {

        event.preventDefault();
        const {email,password }= this.state;

        if(this.props.currentUser){
            alert("you are already signed in :)")
            return
        }
       try {
           await auth.signInWithEmailAndPassword(
               email,
               password 
           )
           this.setState({
            email: "",
            password: "",
           })
       } catch (error) {
           console.log(alert(error.message));
       }


        this.setState({
            email: '', password: '',
        })
    }


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (

            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        lable='email'
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        lable='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className="buttons">
                    <CustomButton type="submit">Submit Form</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>

                    </div>
                    

                </form>


            </div>

        );
    }


}


export default SignIn;


