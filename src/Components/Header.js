import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image'
import { AiOutlineUser } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import LinkComp from './LinkComp';
export default function Header({
    page
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '120px',
            color: 'black',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'flex',
                // flexDirection: 'row',
                width: '100%',
                height: '70px',
                color: COLORS.Primary,
                textAlign: 'center',
                justifyContent: "space-between",
                alignItems: 'center',
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
                    alignItems: "center"
                }}><AiOutlineUser size={20}
                    color={COLORS.gray}
                    style={{
                        margin: 5,
                    }} />
                    <p style={{
                        ...FONTS.h3,
                        marginRight: 100
                    }}>
                        Register / Already a member ?
                    </p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '50px',
                color: COLORS.gray,
                textAlign: 'center',
                // backgroundColor: COLORS.layout
            }}>
                <LinkComp title={"Home"} path={"/"} active={page}/>
                <LinkComp title={"Pricing"} path={"/pricing"} textStyle={{marginLeft:50}}active={page} />
                <LinkComp title={"About us"} path={"/about_us"} textStyle={{marginLeft:50}}active={page}/>
                <LinkComp title={"Contact"} path={"/contact"} textStyle={{marginLeft:50}} active={page}/>
                <LinkComp title={"More"} path={"/more"} textStyle={{marginLeft:50}} active={page}/>
                <AiFillCaretDown style={{
                    alignSelf: 'center',
                }}/>
            </div>
        </div>
    )
}
