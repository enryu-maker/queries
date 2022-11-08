import React from 'react'
import { Routes, Route } from "react-router-dom";
import Pricing from '../Common/Pricing';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import More from './More';
import Signup from './Signup';

export default function Authnav() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
        </Routes>
    )
}
