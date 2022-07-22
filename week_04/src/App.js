import React from "react"
import { ErrorBoundary } from "./components/error-boundary"
import { Header } from "./components/header"
import { Products } from "./components/products"
import { ShoppingCart } from "./components/shopping-cart"
import "./example-app.css"
import { Routes, Route } from "react-router-dom";
import About from './components/About/about';


export default function () {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div className="container example-app"><Products /></div>} />

        <Route path="/" element={<ErrorBoundary><ShoppingCart /></ErrorBoundary>} />
        <Route path="/About" element={<About />} />
        

      </Routes>
    </>
  )
}