import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image'
import { AiOutlineUser } from "react-icons/ai";
export default function Header() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '140px',
            color: 'black',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'flex',
                // flexDirection: 'row',
                width: '100%',
                height: '70px',
                color: COLORS.Primary,
                // textAlign: 'center',
                justifyContent:"space-between"
            }}>
                <div>
                <img
                    src={IMAGES.logo}
                    alt="logo"
                    style={{
                        height: 70,
                        width: 180,
                        marginLeft: 100,
                    }}
                />
                </div>
                
                <div style={{
                display: 'flex',
                color: COLORS.gray,
                textAlign: 'center',
                alignItems:"center"
            }}><AiOutlineUser size={20} 
            color={COLORS.gray}
            style={{
                margin:5,
            }}/>
                <p style={{
                    ...FONTS.h3,
                    marginRight:100
                }}>
                Register / Already a member ?
                </p>
            </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '70px',
                color: COLORS.gray,
                textAlign: 'center'
            }}>
                <p style={{
                    ...FONTS.h3,
                    marginLeft:110
                }}>
                Home
                </p>
                <p style={{
                    ...FONTS.h3,
                    marginLeft:50
                }}>
                About us
                </p>
                <p style={{
                    ...FONTS.h3,
                    marginLeft:50
                }}>
                Contact
                </p>
                <p style={{
                    ...FONTS.h3,
                    marginLeft:50
                }}>
                More
                </p>
            </div>
        </div>
    )
}
