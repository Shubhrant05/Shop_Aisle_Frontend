import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShopCard from './ShopCard'
import HeroSection from './HeroSection'
import { Nav } from './Nav'
import loader from '../Assets/loader.svg'
import { Card } from 'react-bootstrap'
// import backpic from '../Assets/BackgroundPic.jpg'
const Content = () => {
  const [data, setData] = useState([])
  const [searchLoader, setSearchLoader] = useState(false);
  useEffect(() => {
    setSearchLoader(true)
    axios.get("https://shopaislebackend.onrender.com/api/shop/getShop").then(
      (response) => {
        console.log(response)
        setData(response.data)
        setSearchLoader(false)
      }
    )
  }, [])

  localStorage.clear()
  return (
    (searchLoader) ?
      <div className="d-flex justify-content-center" >
        <img src={loader} alt="loader" style={{ color: 'white' }} />
      </div> :
      <div style={{ height: '100%', width: '100%', backgroundImage: "url('../Assets/BackgroundPic.jpg')" }}>
        {/* <Navigation /> */}
        <Nav />
        <HeroSection />
        {
          data ? data.map((shop) => {
            return (
              <ShopCard key={shop._id} name={shop.name} category={shop.category} location={shop.area} status={shop.status} id={shop._id} opening={shop.opening} closing={shop.closing} creator={shop.creator} />
            )
          }) : <h1 style={{ color: 'white' }}>Fuck u</h1>
        }

        <div className='d-flex justify-content-center column '>
          <Card style={{ width: '48rem' }} className='m-3 shadow p-3 mb-3 bg-white rounded'>
            <Card.Body style={{ boxShadow: "5px 5px 5px grey", display: "flex" }}>
              <div className='w-85' style={{ textAlign: 'center' }}>

                <Card.Title className='title' style={{ fontSize: "2rem", fontWeight: "700" }}>Welcome to Shop Aisle</Card.Title>
                <Card.Subtitle className="mt-2 mb-3 text-muted" style={{ fontSize: "1.3rem" }}>

                  Dear user, Welcome to Shop Aisle. Shop Aisle is created with the aim of cooperation between you and your fellow people. You can list shops which you found good, see what other shops people have added. Enjoy a complete list of shops that you found or which other people have added. Get benefits and give benefits. Contact creators of shop through there e-mail id's for a better description of shop.

                  <div className='d-flex justify-content-evenly'>

                  </div>

                </Card.Subtitle>

              </div>
            </Card.Body>
          </Card>
        </div>

      </div>
  )
}

export default Content