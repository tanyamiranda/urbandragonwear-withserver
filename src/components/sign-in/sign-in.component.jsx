import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:"", password:""});
    }

    // As a user types in, this function will set the state 
    handleChange = event => {
        const {value, name} = event.target;
        //console.log(name, value);
        this.setState({[name]: value});
    }


    render () {

        return (

            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChangeEvent={this.handleChange} 
                        required 
                        label="Email"
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChangeEvent={this.handleChange} 
                        required
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>

        );

    }

}

export default SignIn;