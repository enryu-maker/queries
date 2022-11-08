import React from 'react'
import Header from '../../Components/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../../Components/Footer';

export default function Contact() {
  const [show, setShow] = React.useState(false)
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: COLORS.layout,
      paddingTop: 40,
    }}>
      <Header page={"Contact"} />
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        width: "90%",
        marginTop: 120,
        marginBottom:50
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "40%",
        }}>
          <p style={{
            ...FONTS.largeTitle,
            marginBlockEnd: 0,
            color: COLORS.gray
          }}>
            Contact Us
          </p>
          <p style={{
            ...FONTS.body2,
            marginBlockEnd: 0,
            color: COLORS.black
          }}>
            Should you have any questions regarding <br></br> our product, do not hesitate to reach out.
          </p>
          <button style={{
            display: "flex",
            marginTop: 20,
            borderWidth: 0,
            backgroundColor: COLORS.transparent,
            color: COLORS.Primary,
            alignItems: "center",
            justifyContent: "center",
            ...FONTS.h2,
            cursor: "pointer",

          }}
            onClick={() => {
              setShow(!show)
            }}
          >
            Write to us <BsArrowRight size={20} style={{
              marginLeft: 10
            }} color={COLORS.Primary} />
          </button>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: "50%",
        }}>

          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8625228787237!2d73.72477151491609!3d19.972283028376985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded4582aea6f1%3A0x11619722b3c8ffee!2sNerdtech%20%7C%20Web%20Development%20and%20Mobile%20Applications%20Development%20Agency!5e0!3m2!1sen!2sin!4v1667906746636!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{
              border: 0,
              borderRadius: 10
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          
        </div>
      </div>
      {
        show ? 
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <form style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div> : 
        null
      }
      <Footer />
    </div>
  )
}
