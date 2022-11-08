import { Action } from '@remix-run/router'
import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import { COLORS,FONTS } from '../Theme/Theme'
export default function FaqButton({
    question,
    answer,
}) {
    const [active,setActive] = React.useState(false)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            paddingBottom:50
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"

            }}>
                <p style={{
                     ...FONTS.body2,
                     marginBlockEnd: 0,
                     color: COLORS.Primary
                }}>
                    {question}
                </p>
                <button style={{
                    borderWidth: 0,
                    backgroundColor: COLORS.transparent
                }}
                    onClick={() => {
                        setActive(!active)
                    }}
                >
                    {
                        active?<AiOutlineMinus size={30} color={COLORS.Primary} /> :  <AiOutlinePlus size={30} color={COLORS.Primary} />
                    }
                   
                </button>
            </div>
            {
                active ?
                    <p style={{
                        ...FONTS.body3,
                        marginBlockEnd: 0,
                        color: COLORS.gray
                   }}>
                        {answer}
                    </p> : null
            }


        </div>
    )
}
