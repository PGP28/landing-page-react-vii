import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Marketing from './components/marketing';
import Portfolio from './components/portfolio';
import Features from './components/features';
import ContactForm from './components/contactForm';

const Home = props => {
    return (
        <>
            {/* <!-- Navigation --> */}
            <Navbar />
            <Header />
            {/* <!-- Page Content --> */}
            <Main>
                <h1 className="my-4">Welcome to Modern Business</h1>
                {/* <!-- Marketing Icons Section --> */}
                <Marketing />
                {/* <!-- /.row --> */}
                {/* <!-- Portfolio Section --> */}
                <Portfolio />
                {/* <!-- /.row --> */}
                {/* <!-- Features Section --> */}
                <Features />

                {/* <!-- Contact Form --> */}
                {/* <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. --> */}
                <ContactForm />
                {/* <!-- /.row --> */}
            </Main >
            {/* <!-- /.container --> */}
            {/* <!-- Footer --> */}
            <Footer />
        </>
    )
}

export default Home;