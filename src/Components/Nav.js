import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import { Modal } from 'react-bootstrap'

export const Nav = props => {
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    const [email,setEmail] = useState(false)

    useEffect(() => {
      props.isLogin ? setEmail(true) : setEmail(false)
    }, [ props.isLogin])

   
    const [show, setShow] = useState(false);
    const  SideBar = () => {
        return (
          <>
            <div className='d-flex col mt-3 hamburger'>
                <BiMenu className='hamburger-icon' onClick={() => {setShow(true)}}/>
            </div>
      
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Menu
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{background:'#006994',display:'flex',flexDirection:'column'}} >
              
                <div className='nav-btn' onClick={() => {navigate('/signup')}}  style={{ display: localStorage.userEmail ? "none" : "block" }}>Sign Up</div>
                <div className='nav-btn' style={{ display: email ? "none" : "block" }}  onClick={() => {navigate('/login')}}>Login</div>
                <div className='nav-btn' style={{ display: email ? "block" : "none" , marginRight:'2rem'}}  onClick={onLogout}>Logout</div>
                <div className='nav-btn' style={{ display: email ? "none" : "block" , marginRight:'2rem'}}  onClick={() => {navigate('/login')}}>My Shops</div>
             
              </Modal.Body>
            </Modal>
          </>
        );
      }
      


    return (
        <div className='d-flex justify-content-between'>


            <SideBar/>
            <div className='w-75'>
                <p style={{ color: 'rgb(255,81,81)', fontSize: '3rem', marginLeft: '0rem' }} onClick={() => {navigate( email ? '/dashboard' : '/')}}>Shop Aisle</p>
            </div>


            <div className='btngrp'>
                <button className='nav-btn' onClick={() => {navigate('/signup')}}  style={{ display: localStorage.userEmail ? "none" : "block" }}>Sign Up</button>
                <button className='nav-btn' style={{ display: email ? "none" : "block" }}  onClick={() => {navigate('/login')}}>Login</button>
                <button className='nav-btn' style={{ display: email ? "block" : "none" , marginRight:'2rem'}}  onClick={onLogout}>Logout</button>
                <button className='nav-btn' style={{ display: email ? "none" : "block" , marginRight:'2rem'}}  onClick={() => {navigate('/login')}}>My Shops</button>
            </div>
        </div>
    )
}

export const LoginNav = () => {
  const navigate = useNavigate()
  const onLogout = () => {
      sessionStorage.clear()
      navigate('/')
  }

 
  const [show, setShow] = useState(false);
  const  SideBar = () => {
      return (
        <>
          <div className='d-flex col mt-3 hamburger'>
              <BiMenu className='hamburger-icon' onClick={() => {setShow(true)}}/>
          </div>
    
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Menu
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background:'#006994',display:'flex',flexDirection:'column'}} >
            
              <div className='nav-btn'  onClick={onLogout}>Logout</div>
           
            </Modal.Body>
          </Modal>
        </>
      );
    }
    


  return (
      <div className='d-flex justify-content-between'>


          <SideBar/>
          <div className='w-100'>
              <p style={{ color: 'rgb(255,81,81)', fontSize: '3rem', marginLeft: '2rem' }} onClick={() => {navigate( localStorage.userEmail ? '/dashboard' : '/')}}>Shop Aisle</p>
          </div>


          <div className='btngrp'>
              <button className='nav-btn' style={{ marginRight: '2rem' }} onClick={onLogout}>Logout</button>
          </div>
      </div>
  )
}
