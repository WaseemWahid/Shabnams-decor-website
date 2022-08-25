import React from 'react'
import { Header, Services, Work, Testimonial, Footer, About } from './container/'
import { Navbar } from './components'
import './App.css'


const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;