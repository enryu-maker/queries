import React from 'react'
import { COLORS } from '../Theme/Theme'

export default function Footer() {
    return (
        <div
            style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100px',
                backgroundColor: COLORS.layout,
                color: COLORS.Primary,
                textAlign: 'center'
    }}
    > Footer
    
    </div >
  )
}
