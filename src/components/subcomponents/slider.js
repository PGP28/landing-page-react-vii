import React from 'react';

const Slider = ({ image, title, description, active }) => {
    return (
        <div className={"carousel-item" + (active ? " active": "")} style={{ "backgroundImage": `url('${image}')` }}>
            <div className="carousel-caption d-none d-md-block">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Slider;