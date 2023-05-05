import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../layouts/Header'
import Body from '../layouts/Body'
import Footer from '../layouts/Footer'

export default function AppContainer() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
