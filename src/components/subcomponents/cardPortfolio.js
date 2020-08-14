import React from 'react';

const CardPortfolio = ({url, srcImg, title, description}) => {
    return (
        <div className="card h-100">
            <a href={url}><img className="card-img-top" src={srcImg} alt="" /></a>
            <div className="card-body">
                <h4 className="card-title">
                    <a href={url}>{title}</a>
                </h4>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default CardPortfolio;