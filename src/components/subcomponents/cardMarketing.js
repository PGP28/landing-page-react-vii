import React from 'react';

const CardMarketing = ({ title, description, link: { url, label } }) => {
    return (
        <div className="card h-100">
            <h4 className="card-header">{title}</h4>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <a href={url} className="btn btn-primary">{label}</a>
            </div>
        </div>
    )
}

export default CardMarketing;