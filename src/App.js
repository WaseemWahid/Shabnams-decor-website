import React from 'react'
import { Header, About, Work, Testimonial, Footer } from './container/'
import { Navbar } from './components'

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;