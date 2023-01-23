import React from 'react'
import signup from '../Assets/signup.svg'
import SignupForm from './Forms/SignupForm'
import {Nav} from './Nav'
const Signup = () => {
    return (
        <div>
            <Nav/>
            <div className='d-flex signup-page'>
                <div className='signup'>
                    <img src={signup} alt="signup pic" />
                </div>
                <div className='signup-form'>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Signup