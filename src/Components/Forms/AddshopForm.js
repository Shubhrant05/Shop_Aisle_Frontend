import React from 'react'
import axios from 'axios'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const AddshopForm = props => {

    const navigate = useNavigate()
    const submitHandler = (values, action) => {

        axios({
            method: "post",
            url: "http://localhost:5000/api/shop/addShop",
            data: values,
        }).then(() => console.log("Shop-added")).catch(() => console.log("Error occured in sign-up",values))

        axios.get("http://localhost:5000/api/shop/getShop").then(
            (response) => {
                console.log(response)
                props.stateAccess(response.data)
            }
        )
        navigate('/dashboard')

    }

    const validate = Yup.object({
        name: Yup.string().required("It is a required field"),
        area: Yup.string().required("It is a required field"),
        category: Yup.string().required("It is a required field"),
        opening: Yup.string().required("It is a required field"),
        closing: Yup.string().required("It is a required field")
    })
    return (

        <div style={{ height: "100vh" }}>

            <Formik
                initialValues={{
                    name: "",
                    area: "",
                    category: "",
                    opening: "",
                    closing: "",
                    creator: localStorage.getItem('userEmail')
                }}

                validationSchema={validate}
                onSubmit={submitHandler}
            >
                {
                    formik => (
                        <>
                            <div className='signup-head' style={{ color: "white" }}>Add to the <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p></div>

                            <Form method='POST' className='form-input mt-4'>
                                <Inputfield placeholder="Enter name of place" type="text" name="name" />
                                <Inputfield placeholder="Enter location" type="text" name="area" />
                                <Inputfield placeholder="Enter type of place" type="text" name="category" />
                                <Inputfield placeholder="Enter opening time" type="time" name="opening" />
                                <Inputfield placeholder="Enter closing time" type="time" name="closing" />

                                <div className='d-flex justify-content-between mt-5'>
                                    <Button style={{ color: "white", background: "rgb(255,81,81)", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='submit'>Add</Button>

                                    <Button style={{ color: "black", background: "white", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto" }} className="w-25 shadow-none mt-2" type='reset' >Reset</Button>
                                </div>
                                {/* <a href='/dashboard' className="mt-3" style={{fontSize:"1.2rem",color:"rgb(255,81,81)",textAlign:"center"}}>Already a member? Log-in</a> */}
                            </Form>

                        </>
                    )

                }
            </Formik>
        </div>
    )
}

export default AddshopForm