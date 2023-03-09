import React, { useEffect } from 'react'
import signin from '../Assets/SignIn.svg'
import LoginForm from './Forms/LoginForm'
import {Nav} from './Nav'

const Login = () => {


    return (
        <div>
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