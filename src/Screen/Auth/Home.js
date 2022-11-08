import React from 'react'
import Header from '../../Components/Header'
import TextButton from '../../Components/TextButton'
import { COLORS, FONTS } from '../../Theme/Theme'
export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: COLORS.layout
    }}>
      <Header page={"Home"} />
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        width: "90%",
        marginTop: 120,
        marginBottom: 50
      }}>
        <p style={{
          ...FONTS.largeTitle,
          marginBlockEnd: 0,
          color: COLORS.gray,
          textAlign: "center"
        }}>
          Customer service is great, but it's <b>even better</b> when it's combined with higher sales
        </p>
        <TextButton 
        buttonContainerStyle={{
          width:250,
          marginTop:20
        }}
        labelStyle={{
          ...FONTS.h2
        }}
        label={"Get started"}/>
      </div>
    </div>
  )
}
