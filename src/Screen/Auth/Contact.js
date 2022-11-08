import React from 'react'
import Header from '../../Components/Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import { BsArrowRight } from "react-icons/bs";
import InputForm from '../../Components/InputForm';
import { AiOutlineLeft } from "react-icons/ai";
import TextButton from '../../Components/TextButton';

export default function Contact() {
  const [show, setShow] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")


  function form() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "40%",
      }}>

        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: "100%",
          color: COLORS.gray,
          ...FONTS.largeTitle,
        }}>


          <p style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: COLORS.Primary,
            alignSelf: "self-start",
          }}
            onClick={() => {
              setShow(!show)
            }}
          >
            <AiOutlineLeft size={30} color={COLORS.white} />
          </p>&nbsp;Contact Us
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <InputForm
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder={"Name:"}
            type={"text"}
            value={name}

          />
          <InputForm
            onChange={(event) => {
              setCompany(event.target.value);
            }}
            placeholder={"Company:"}
            type={"text"}
            value={company}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <InputForm
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder={"Email:"}
            type={"email"}
            value={email}

          />
          <InputForm
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            placeholder={"Phone:"}
            type={"number"}
            value={phone}
          />
        </div>
        <textarea
          placeholder={"Message:"}
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            height: 100,
            alignSelf: "center",
            width: "90%",
            ...FONTS.body4,
            borderWidth: 2,
            outline: "none",
            padding: 10,
          }}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <TextButton label={"Send Message"}
          buttonContainerStyle={{
            marginTop: 20
          }}
        />


      </div>
    )
  }

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
        marginTop:120,
        marginBottom: 50
      }}>
        {
          show ? form() :

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
        }
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
            height="500"
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
    </div>
  )
}
