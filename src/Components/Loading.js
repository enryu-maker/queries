import React from 'react'
import ReactLoading from 'react-loading';
import { COLORS,SIZES } from '../Theme/Theme';
export default function Loading({
    color=COLORS.white,
    size=35
}) {
  return (
    <>
      <div style={{
        display:"flex",
        justifyContent:"center",
        borderRadius: SIZES.radius,
        borderWidth: 0,
        height: 50,
        marginTop:"20px"
      }}>
        <ReactLoading type={"spin"} color={color} height={size} width={size}  />
      </div>
    </>
  )
}