import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/properties" element={<h1>Properties</h1>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root