import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SignupForm = () => {

    const navigate = useNavigate()
    const [passBtn, setPassBtn] = useState(false)

    const passBtnHandler = () => {
        passBtn ? setPassBtn(false) : setPassBtn(true)
    }
    const submitHandler = (values, action) => {

        axios({
            method: "post",
            url: "http://localhost:5000/api/user/addUser",
            data: values,
        }).then((res) => {

            if (res.status === 200) {
                // navigate('/login')
                localStorage.setItem('userEmail', values.email)
                navigate('/dashboard')
            }

        }).catch(() => {
            console.log("Error occured in sign-up")
            alert("We found user with same E-mail ID. Please login to continue")
            //   document.getElementById('reset').click() 
            navigate('/login')
        })


    }

    const validate = Yup.object({
        name: Yup.string().max(25, "Name must be less than or equal to 25 characters").required("It is a required field"),
        email: Yup.string().email().required("It is a required field"),
        password: Yup.string().min(6, "Password must be of minimum 6 characters").required("It is a required field"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("It is a required field")
    })
    return (

        <div style={{ height: "100vh" }}>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}

                validationSchema={validate}
                onSubmit={submitHandler}
            >
                {
                    formik => (
                        <>
                            <div className='signup-head' style={{ color: "white" }}> Welcome to the <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p></div>

                            <Form method='POST' className='form-input mt-4'>
                                <div style={{ textAlign: "center" }}>
                                    <Inputfield placeholder="Enter Name" type="text" name="name" />
                                    <Inputfield placeholder="Enter E-mail" type="email" name="email" />
                                    <Inputfield placeholder="Enter Password" type={passBtn ? "text" : "password"} name="password" buttonstat={1} />
                                    <Inputfield placeholder="Confirm Password" type={passBtn ? "text" : "password"} name="confirmPassword" buttonstat={1} />
                                    <div className='password-button mx-auto' onClick={passBtnHandler}>{passBtn ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>
                                </div>
                                <div className='d-flex justify-content-between mt-5'>
                                    <Button style={{ color: "white", background: "rgb(255,81,81)", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='submit'>Register</Button>

                                    <Button style={{ color: "black", background: "white", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='reset' id='reset'>Reset</Button>
                                </div>
                                <a href='/login' className="mt-3" style={{ fontSize: "1.2rem", color: "rgb(255,81,81)", textAlign: "center" }} >Already a member? Log-in</a>
                            </Form>

                        </>
                    )

                }
            </Formik>
        </div>
    )
}

export default SignupForm