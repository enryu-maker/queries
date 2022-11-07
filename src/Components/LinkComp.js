import React from 'react'
import { Link } from 'react-router-dom'
import { FONTS, COLORS } from '../Theme/Theme'
export default function LinkComp({
    path,
    title,
    textStyle,
    icon,
    active,
}) {
    return (
        <Link to={path} style={{
            ...FONTS.h3,
            marginLeft: 110,
            textDecoration: 'none',
            alignSelf: 'center',
            color: title===active?COLORS.Primary:COLORS.gray,
            ...textStyle
        }} >
            {title}{icon?icon:null}
        </Link>
    )
}
