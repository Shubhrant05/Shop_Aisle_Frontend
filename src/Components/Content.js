import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShopCard from './ShopCard'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import EditshopForm from './Forms/EditshopForm'
import loadingsvg from '../Assets/loader.svg'


const Content = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:5000/api/shop/getShop").then(
            (response) => {
                console.log(response)
                setData(response.data)
                setLoading(false)
            }
        )
    }, [])
    // setSearchLoader(false)
    // const stateAccess = (dataVal) => {
    //     setData(dataVal)
    // }

    const deleteShop = (id) => {
        axios.delete(`http://localhost:5000/api/shop/deleteShop/${id}`).then((response) => {
            if (response.status === 200) {
                alert(response.data.name + " will be deleted")
                let filteredArr = data.filter((shop) => shop._id !== response.data._id)
                setData(filteredArr)
            }
            else {
                alert("Shop could not be deleted")
            }
        })

    }



    return (
        loading ?
            <div className="d-flex justify-content-center" >
                <img src={loadingsvg} alt="loader" />
            </div> :
            <div>
                <div className='d-flex justify-content-center mt-3 mb-3'>
                    <Button className='w-50  ml-2 shadow-none' style={{ color: "white", fontSize: "1.5rem", fontFamily: " 'Poppins', 'sans-serif'", background: "#ff5151", fontWeight: "700" }} onClick={() => { navigate('/dashboard/addShop') }}>Add a shop</Button>
                </div>
                {
                    data.filter((shop) => shop.creator === localStorage.getItem('userEmail'))?.map((shop) => {
                        return (
                            <ShopCard key={shop._id} name={shop.name} category={shop.category} location={shop.area} status={shop.status} id={shop._id} delete={deleteShop} opening={shop.opening} closing={shop.closing} />
                        )
                    })
                }

                <div style={{ display: "none" }}>
                    <EditshopForm stateAccess={setData} />
                </div>


            </div>
    )
}

export default Content