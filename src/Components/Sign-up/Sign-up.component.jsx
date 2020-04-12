import React from 'react';
import FormInput from '../form-input/Form-input.component';
import CustomButton from "../Custom-button/Custom-button.compnent";
import { signUpStart } from '../../Redux/user/user.action'
import "./Sign-up.styles.scss";

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectSignUpLoading } from '../../Redux/user/user.selector';



class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',

        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { signUpStart } = this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("check your passwords don't match :)");
            return;
        }


        signUpStart({ email, password, displayName })


      
    }

    render() {
        const { loading } = this.props
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

const mapStateToProps = createStructuredSelector({
    loading: selectSignUpLoading
})



const mapDispatchToProps = dispatch => ({
    signUpStart: ({ email, password, displayName }) => dispatch(signUpStart({ email, password, displayName }))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);