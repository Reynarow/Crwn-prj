import React from 'react';
import './Sign-in.styles.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.compnent';
import {createStructuredSelector} from 'reselect';
import {selectSignInLoading} from '../../Redux/user/user.selector'
import { googleSignInStart, emailSignInStart } from '../../Redux/user/user.action'


class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        const { emailSignInStart} = this.props;
        const { email, password } = this.state;

      
        await emailSignInStart(email,password);

        this.setState({
            email: '', password: '', 
        })
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { loading } = this.props;
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="submit" isLoading={loading}>Submit Form</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>

                    </div>


                </form>


            </div>

        );
    }


}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

const mapStateToProps = createStructuredSelector({
    loading : selectSignInLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


