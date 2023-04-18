import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Nav,Footer,Home,Setup,Contact} from './components';
import {useEffect} from "react";

export default function App() {

  return (
    <BrowserRouter className="App">
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}


