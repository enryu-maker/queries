import React from 'react'
import Header from '../../Components/Header'
import TextButton from '../../Components/TextButton'
import { COLORS, FONTS } from '../../Theme/Theme'

export default function Pricing() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <Header page={"Pricing"}/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection:"column"
        
        // marginTop:'120px'
      }}>
        <p style={{
          ...FONTS.largeTitle,
          marginBlockEnd:0,
          color:COLORS.gray
        }}>
          Reach your customers now, pick a plan later
        </p>
        <p style={{
          marginBlockStart:0,
          color:COLORS.gray,
          ...FONTS.body2,
        }}>
          Try Queries for free. No credit card required.
        </p>
        <TextButton label={'Start your free trial'}/>
      </div>
    </div>
  )
}
