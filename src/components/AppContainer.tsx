import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Body } from '../layouts/Body'

export default function AppContainer() {
  return (
    <div className="pb-[72px]">
      <BrowserRouter>
        {/* Header */}
        <Header />
        {/* Body */}
        <Body />
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}
