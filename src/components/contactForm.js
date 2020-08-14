import React, { useState } from 'react';

const ContactForm = props => {

    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [show, setShow] = useState(false);


    const sendMessage = e => {
        e.preventDefault();
        if (e.target.name.value === "") {
            e.target.name.classList.add("is-invalid");
        }else{
            e.target.name.classList.remove("is-invalid");
        }
        if (e.target.phone.value === "") {
            e.target.phone.classList.add("is-invalid");
        }
        if (e.target.email.value === "") {
            e.target.email.classList.add("is-invalid");
        }
        if (e.target.message.value === "") {
            e.target.message.classList.add("is-invalid");
        }

        if (e.target.name.value !== "" &&
            e.target.phone.value !== "" &&
            e.target.email.value !== "" &&
            e.target.message.value !== ""
        ) {
            setShow(true);
            e.target.name.value = "";
            e.target.phone.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
        }
    }

    return (
        <div className="row">
            <div className="col-lg-8 mb-4">
                <h3>Send us a Message</h3>
                <form name="sentMessage" id="contactForm" novalidate onSubmit={sendMessage}>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Full Name:</label>
                            <input type="text"
                                className="form-control"
                                id="name"
                                /* required */
                                data-validation-required-message="Please enter your name."
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                            />
                            <p className="help-block"></p>
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Phone Number:</label>
                            <input type="tel"
                                className="form-control"
                                id="phone"
                                /* required */
                                data-validation-required-message="Please enter your phone number."
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Email Address:</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                /* required */
                                data-validation-required-message="Please enter your email address."
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Message:</label>
                            <textarea rows="5"
                                cols="100"
                                className="form-control"
                                id="message"
                                /* required */
                                data-validation-required-message="Please enter your message"
                                maxLength="999"
                                style={{ "resize": "none" }}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <div id="success"></div>
                    {/* <!-- For success/fail messages --> */}
                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
                </form>
            </div>
            <div className="col-lg-4 mb-4">
                <h3>My Info</h3>
                {
                    show && (
                        <ul>
                            <li>{fullname}</li>
                            <li>{phone}</li>
                            <li>{email}</li>
                            <li>{message}</li>
                        </ul>
                    )
                }
            </div>

        </div>
    )
}

export default ContactForm;