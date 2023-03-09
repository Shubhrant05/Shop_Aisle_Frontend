import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LoginNav, Nav } from '../Nav'
import jwt_decode from "jwt-decode"


const LoginForm = () => {

    const navigate = useNavigate()
    const [passBtn, setPassBtn] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})

    const handleCallBackResponse = (res) => {
        console.log("JWT TOKEN ID", res.credential)
        var userObject = jwt_decode(res.credential)
        console.log(userObject)
        sessionStorage.setItem("user",JSON.stringify(userObject))
        setUser(JSON.parse(sessionStorage.getItem("user")))
    }
    useEffect(() => {
        /*global google*/
        user.email_verified && navigate("/dashboard") 
        console.log(user,"result")
        google.accounts.id.initialize({
            client_id: "235257409135-nbaja0i95qriujen6jqoddlhg72uqkn8.apps.googleusercontent.com",
            callback: handleCallBackResponse
        })
        console.log(google.accounts)
        google.accounts.id.renderButton(
            document.getElementById("loginBtn"),
            {theme : "outline" , size : "large"}

        )
    },[user])
    //   }
    const passBtnHandler = () => {
        passBtn ? setPassBtn(false) : setPassBtn(true)
    }
    const submitHandler = (values, action) => {

        axios({
            method: "post",
            url: "https://shopaislebackend.onrender.com/api/user/login",
            data: values,
        }).then((res) => {

            if (res.status === 200) {
                console.log(res)
                navigate('/dashboard')
                localStorage.setItem('userEmail', values.email)
                setIsLogin(true)
            }
            else {
                console.log("error")
                alert("Entered email or password is wrong")

            }
        }).catch((res) => {
            console.log(res)
        })


    }

    const validate = Yup.object({

        email: Yup.string().email().required("It is a required field"),
        password: Yup.string().min(6, "Password must be of minimum 6 characters").required("It is a required field"),

    })
    return (

        <div style={{ height: "100vh" }}>

            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}

                validationSchema={validate}
                onSubmit={submitHandler}
            >
                {
                    formik => (
                        <>
                            <div className='signup-head' style={{ color: "white" }}> Walk-in the <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p></div>
                            <center id = "loginBtn" className='mt-4'></center>
                            <Form method='POST' className='form-input mt-4 p-3'>
                                <div style={{ textAlign: "center" }}>
                                    <Inputfield placeholder="Enter E-mail" type="email" name="email" />
                                    <Inputfield placeholder="Enter Password" type={passBtn ? "text" : "password"} name="password" />
                                    <div className='password-button mx-auto' onClick={passBtnHandler}>{passBtn ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>

                                </div>
                                <div className='d-flex justify-content-between mt-5'>
                                    <Button style={{ color: "white", background: "rgb(255,81,81)", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='submit'>Login</Button>

                                    <Button style={{ color: "black", background: "white", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='reset' id='reset'>Reset</Button>
                                </div>

                            </Form>

                        </>
                    )

                }
            </Formik>
             <div style={{display:'none'}}>
                <Nav isLogin={isLogin} />
             </div>
            
        </div>
    )
}

export default LoginForm