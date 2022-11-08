import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image';
import { AiFillFacebook, AiOutlineArrowUp, AiFillLinkedin, AiFillYoutube, AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        // height: '200px',
        backgroundColor: COLORS.white,
        color: COLORS.Primary,
        textAlign: 'center'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '60px',
      }}>
        <button style={{
          borderWidth: 0,
          backgroundColor: COLORS.transparent,
          color: COLORS.Primary,
          margin: 10
        }}>
          <AiFillFacebook size={28} color={COLORS.Primary} />
        </button>
        <button style={{
          borderWidth: 0,
          backgroundColor: COLORS.transparent,
          color: COLORS.Primary,
          margin: 10
        }}>
          <AiFillLinkedin size={28} color={COLORS.Primary} />
        </button>
        <button style={{
          borderWidth: 0,
          backgroundColor: COLORS.transparent,
          color: COLORS.Primary,
          margin: 10
        }}>
          <AiFillYoutube size={28} color={COLORS.Primary} />
        </button>
        <button style={{
          borderWidth: 0,
          backgroundColor: COLORS.transparent,
          color: COLORS.Primary,
          margin: 10
        }}>
          <AiFillTwitterSquare size={28} color={COLORS.Primary} />
        </button>
      </div>
      <div style={{
        backgroundColor: COLORS.lightGray1,
        width: '80%',
        height: 2,
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        padding: 20,
      }}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.gray,
            textAlign: "left",
            marginBlockStart:0
          }}>
            Queries - Consultancy
          </p>
          <Link to={'/about_us'} style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2
          }}>
            About Us
          </Link>
          <Link to={'/contact'} style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Contact Us
          </Link>
          
          <Link style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Terms & Conditions
          </Link>
          <Link style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Privacy Policy
          </Link>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.gray,
            textAlign: "left",
            marginBlockStart:0

          }}>
            More
          </p>
          <Link style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Blog
          </Link>
          <Link style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            FAQ
          </Link>
          <Link style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Carrers
          </Link>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.gray,
            textAlign: "left",
            marginBlockStart:0

          }}>
            Product By
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // paddingLeft:20,
            marginTop:-15
          }}>
            <img src={IMAGES.logo2} 
            alt="logo"
            style={{
              height: 30,
              width: 35,
            }} />
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              ...FONTS.h2,
              marginBlockStart: 0,
              color: COLORS.Primary,
              alignSelf: "center",
              textAlign: "center",
              backgroundColor: COLORS.transparent,
              borderWidth: 0,
              cursor: "pointer",
              

            }}
            onClick={() => {
              window.open("https://nerdtech.in/")
            }}
          >
            Nerdtech
          </button>
          </div>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "right",
            marginBlockStart:0,
            paddingLeft:35

          }}>
            Your Partner For Innovations
          </p>
          </div>
      </div>
      <div style={{
        backgroundColor: COLORS.lightGray1,
        width: '80%',
        height: 2,
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        height: "80px",
        alignItems: 'center',
      }}>
        <p style={{
          ...FONTS.body3,
          // marginBlockEnd: 0,
          color: COLORS.gray
        }}>
          Copyright Queries 2022, All rights reserved
        </p>
        <div style={{
          display: 'flex',
        }}>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray
          }}>
            BACK TO TOP
          </p>
          <button style={{
            height: 38,
            width: 38,
            borderRadius: 19,
            border:'2px solid rgb(230, 230, 230)',
            backgroundColor: COLORS.white,
            color: COLORS.Primary,
            margin: 10
          }}>
            <AiOutlineArrowUp size={18} color={COLORS.Primary} />
          </button>
        </div>
      </div>
    </div >
  )
}
