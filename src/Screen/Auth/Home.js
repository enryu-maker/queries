import React from 'react'
import Header from '../../Components/Header'
export default function Home() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Header page={"Home"}/>
    </div>
  )
}
