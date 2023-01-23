
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import shop1 from '../Assets/shop1.jpg'
import shop2 from '../Assets/shop2.jpg'
import shop3 from '../Assets/shop3.jpg'
import shop4 from '../Assets/shop4.jpg'
export default function App() {
    return (
        <div className="mx-auto hero-bg" style={{ display: 'block', padding: 30 }}>

            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={shop1}
                        alt=" One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={shop2}
                        alt=" Two"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={shop3}
                        alt=" Three"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={shop4}
                        alt=" Four"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}