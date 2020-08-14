import React, { useState } from 'react';
import Slider from './subcomponents/slider';

const Header = props => {
    const randomId = () => Math.floor(Math.random() * 1000) + 1;

    const [sliders, setSliders] = useState([
        {
            image: `https://picsum.photos/id/${randomId()}/1900/1080/?blur`,
            title: 'First Slide',
            description: 'This is a description for the first slide.',
            active: true,
        },
        {
            image: `https://picsum.photos/id/${randomId()}/1900/1080/?blur`,
            title: 'Second Slide',
            description: 'This is a description for the second slide.',
            active: false,
        },
        {
            image: `https://picsum.photos/id/${randomId()}/1900/1080/?blur`,
            title: 'Third Slide',
            description: 'This is a description for the third slide.',
            active: false,
        },
        {
            image: `https://picsum.photos/id/${randomId()}/1900/1080/?blur`,
            title: 'Fourth Slide',
            description: 'This is a description for the fourth slide.',
            active: false,
        },
        {
            image: `https://picsum.photos/id/${randomId()}/1900/1080/?blur`,
            title: 'Fifth Slide',
            description: 'This is a description for the fifth slide.',
            active: false,
        },
    ]);

    return (
        <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        sliders.length > 0 &&
                        sliders.map((slider, index) => {
                            return <li key={index} data-target="#carouselExampleIndicators" 
                            data-slide-to={index} 
                            className={slider.active ? "active" : ""}></li>
                        })
                    }
                </ol>
                <div className="carousel-inner" role="listbox">
                    {
                        sliders.length > 0 &&
                        sliders.map((slider, index) => {
                            return <Slider {...slider} key={index} />
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>
    )
}

export default Header;