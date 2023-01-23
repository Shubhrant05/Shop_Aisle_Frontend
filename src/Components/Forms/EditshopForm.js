import React, { useEffect } from 'react'
import axios from 'axios'
import '../Common.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputfield from './Inputfield'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const EditshopForm = ({ id, stateAccess, onHide, name, category, closing, area, opening }) => {
    const navigate = useNavigate()
    const submitHandler = (values, action) => {

        axios({
            method: "put",
            url: `http://localhost:5000/api/shop/editShop/${id}`,
            data: values,
        }).then(() => console.log("Shop-edited")).catch(() => console.log("Error occured in editing shop"))
        window.location.reload()
        navigate('/dashboard')

    }
    useEffect(() => {
        axios.get("http://localhost:5000/api/shop/getShop").then(
            (response) => {
                // console.log(response)
                stateAccess(response.data)
            }
        )
    }, [stateAccess])




    const validate = Yup.object({
        name: Yup.string().required("This field is mandatory"),
        area: Yup.string().required("This field is mandatory"),
        category: Yup.string().required("This field is mandatory"),
        opening: Yup.string().required("This field is mandatory"),
        closing: Yup.string().required("This field is mandatory")
    })

    return (

        <div style={{ height: "100vh", background: '#242582' }}>

            <Formik
                initialValues={{
                    name: name,
                    area: area,
                    category: category,
                    opening: opening,
                    closing: closing
                }}

                validationSchema={validate}
                onSubmit={submitHandler}
            >
                {
                    formik => (
                        <>
                            <div className='signup-head' style={{ color: "white" }}> Make your <p style={{ color: "rgb(255,81,81)", display: "inline" }}>Aisle</p> better</div>

                            <Form method='PUT' className='form-input mt-4'>
                                <Inputfield placeholder="Enter name of place" type="text" name="name" />
                                <Inputfield placeholder="Enter location" type="text" name="area" />
                                <Inputfield placeholder="Enter type of place" type="text" name="category" />
                                <Inputfield placeholder="Enter opening time" type="time" name="opening" />
                                <Inputfield placeholder="Enter closing time" type="time" name="closing" />

                                <div className='d-flex justify-content-between mt-5'>
                                    <Button style={{ color: "white", background: "rgb(255,81,81)", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto", marginTop: "-1.5rem" }} className="w-25 shadow-none" type='submit'>Save</Button>

                                    <Button style={{ color: "black", background: "white", fontSize: "1.25rem", fontFamily: "sans-serif", margin: "auto", marginTop: "-1.5rem" }} className="w-25 shadow-none " type='button' onClick={onHide} >Close</Button>
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

export default EditshopForm