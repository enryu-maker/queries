import React from 'react'
import Header from '../../Components/Header'
import TextButton from '../../Components/TextButton'
import { FONTS } from '../../Theme/Theme'

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
        <text style={{
          ...FONTS.largeTitle
        }}>
          Reach your customers now, pick a plan later
        </text>
        <text style={{
          ...FONTS.body2
        }}>
          Try Queries for free. No credit card required.
        </text>
        <TextButton label={'Start your free trial'}/>
      </div>
    </div>
  )
}
