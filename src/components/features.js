import React from 'react';

const Features = props => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h2>Modern Business Features</h2>
                    <p>The Modern Business template by Start Bootstrap includes:</p>
                    <ul>
                        <li>
                            <strong>Bootstrap v4</strong>
                        </li>
                        <li>jQuery</li>
                        <li>Font Awesome</li>
                        <li>Working contact form with validation</li>
                        <li>Unstyled page elements for easy customization</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
                </div>
            </div>
            {/* <!-- /.row --> */}

            <hr />

            {/* <!-- Call to Action Section --> */}
            <div className="row mb-4">
                <div className="col-md-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
                </div>
            </div>
        </>
    )
}

export default Features;