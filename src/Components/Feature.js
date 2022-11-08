import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { COLORS, FONTS } from '../Theme/Theme';
export default function Feature({
    desc
}) {
  return (
    <div style={{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%"
    }}>
        <div style={{
            display:"flex",
            height:20,
            width:20,
            borderRadius:15,
            backgroundColor:COLORS.Primary,
            alignItems:"center",
            justifyContent:"center",
        }}>
        <AiOutlineCheck color={COLORS.white} size={16}/>
        </div>
        <p style={{
            ...FONTS.body4,
            padding:5,
            paddingLeft:10,
            color:COLORS.gray,
            marginBlockStart:0,
            marginBlockEnd:0

        }}>
            {desc}
        </p>
    </div>
  )
}
