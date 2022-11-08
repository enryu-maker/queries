import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { COLORS } from '../../Theme/Theme'
export default function About() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: COLORS.layout
    }}>
      <Header page={"About us"} />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        marginTop:120
      }}>
        Comming Soon
      </div>
      <Footer/>
      </div>
  )
}
