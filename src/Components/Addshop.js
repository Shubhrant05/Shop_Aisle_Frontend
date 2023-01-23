import React from 'react'
import AddshopForm from './Forms/AddshopForm'
import {Nav} from './Nav'
const Addshop = props => {
    return (
        <div>
            <Nav/>
            <div className='d-flex signup-page'>
                <div className='signup-form'>
                    <AddshopForm stateAccess={props.stateAccess} />
                </div>
            </div>
        </div>
    )
}

export default Addshop