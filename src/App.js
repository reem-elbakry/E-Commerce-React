import React from 'react'
import Navc from './components/Navc'
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
    <Navc />
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Products/>} />
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/products/:id' element={<Product/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default App