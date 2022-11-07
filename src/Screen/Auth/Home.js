import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
export default function Home() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Header page={"Home"}/>
        <Footer/>
    </div>
  )
}
