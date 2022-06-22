import React from 'react'
import Header from './komponen/Header';
import Konten from './komponen/Konten';
import Footer from './komponen/Footer';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Konten/>
      <Footer/>
      </div>
      </Router>
  )
}
