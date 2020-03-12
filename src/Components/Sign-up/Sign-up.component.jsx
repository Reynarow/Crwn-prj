import React from 'react';
import FormInput from '../form-input/Form-input.component';
import CustomButton from "../Custom-button/Custom-button.compnent";
import { auth, createUserProfileDocument } from '../firebase/firebase-utils';
import "./Sign-up.styles.scss";



class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading:false,
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("check your passwords don't match :)");
            return;
        }
        try {
            this.setState({loading:true})
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
        } catch (error) { 
            console.error(error)
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading:false,
        })
    }

    render() {
        const {loading} = this.state
        return (
            <div className="sign-up">
                    <h2 className="title">I dont have account</h2>
                    <span className="subtitle">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        lable="displayName"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        lable="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        lable="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
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
}




export default SignUp;