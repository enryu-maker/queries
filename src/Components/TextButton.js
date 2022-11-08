import React from 'react'
import { COLORS,SIZES,FONTS } from '../Theme/Theme'

export default function TextButton({
    disabled,
    label,
    labelStyle,
    onPress,
    icon,
    iconStyle,
    buttonContainerStyle,
    loading,
    border=true
}) {
    
  return (
      <>
        <button onClick={onPress}
        disabled={disabled}
        style={{
            display:"inline-flex",
            justifyContent: 'center',
            backgroundColor: COLORS.Primary,
            borderRadius:SIZES.b_rad,
            borderWidth:0,
            height:50,
            // width:220,
            alignSelf:'center',
            cursor:"pointer",
            
            ...buttonContainerStyle,
        }}
        >
        <p style={{ color: COLORS.white, ...FONTS.body3, ...labelStyle,alignSelf:"center",letterSpacing:1,paddingInline:5, }}>
        {label}
        </p>
        </button>
    </>
  )
}