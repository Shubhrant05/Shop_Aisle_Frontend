import React from 'react'
import signin from '../Assets/SignIn.svg'
import LoginForm from './Forms/LoginForm'
import {Nav} from './Nav'

const Login = () => {
    return (
        <div>
            {/* <div className='signup-logo ml-2'>
                Shop Aisle
            </div> */}
            <Nav/>
            <div className='d-flex signup-page'>
                <div className='signup' style={{ height: '25%' }}>
                    <img src={signin} alt="signup pic" />
                </div>
                <div className='signup-form'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login