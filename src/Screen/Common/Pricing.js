import React from 'react'
import Header from '../../Components/Header'
import PriceButton from '../../Components/PriceButton'
import TextButton from '../../Components/TextButton'
import { COLORS, FONTS } from '../../Theme/Theme'
import Loading from '../../Components/Loading'
import FlatList from 'flatlist-react';
import FaqButton from '../../Components/FaqButton'
import Footer from '../../Components/Footer'
export default function Pricing() {
  const [active,setActive] = React.useState(false)
  const data = [
    {
      question:"Can I change my subscription anytime I want?",
      answer:"Yes. You can upgrade or downgrade your plan anytime you want, regardless of whether you have an active paid subscription or you are on the free plan.",
    },
    {
      question:"Can I subscribe to more than one plan?",
      answer:"Yes. Our plans are very flexible. Think of them as options you can freely turn on and off whenever you want. If you’re looking for advanced live chat features, pick the Communicator plan priced per operator seat. But, if automations are something else you need, you can add the Chatbots plan as well. Remember, you can downgrade your subscription at any time!",
    },
    {
      question:"Can I add Queries Contact form to more than one website/store?",
      answer:"Yes, you can add Queries to multiple sites and/or stores. And Customize the design accordingly",
    }
  ]
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: COLORS.layout
    }}>
      <Header page={"Pricing"} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
        flexDirection: "column",
        marginTop: '120px'
      }}>
        <p style={{
          ...FONTS.largeTitle,
          marginBlockEnd: 0,
          color: COLORS.gray
        }}>
          Reach your customers now, pick a plan later
        </p>
        <p style={{
          marginBlockStart: 0,
          color: COLORS.gray,
          ...FONTS.body2,
        }}>
          Try Queries for free. No credit card required.
        </p>
        <TextButton label={'Start your free trial'}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            flexDirection: "column",
            backgroundColor: COLORS.lightGray1,
            width: '100%',
            marginTop: 50,
          }}>
          <div

            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '85%',
              flexDirection: "row",
              backgroundColor: COLORS.lightGray1,
              width: '90%',
            }}>
            <PriceButton
              tier={"Free"}
              desc={"An excellent choice to get your small website started, no commitment required."}
              price={"$ 0"}
              buttonTitle={"Use Queries for free"}
              feature={['Upto 50 Submission / Mo.', 'Notification on Single Email using']}
            />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: "column",
              backgroundColor: COLORS.lightGray1,
              width: 8,
            }} />

            <PriceButton
              tier={"Basic"}
              desc={"The best option for mid-sized teams that base customer support on live conversations. "}
              price={"$ 6.99"}
              buttonTitle={"Start your free trial"}
              feature={['Upto 250 Submission / Mo.', 'Notification on Single Email', 'Notification on Single Phone Number']}
            />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: "column",
              backgroundColor: COLORS.lightGray1,
              width: 8,
            }} />
            <PriceButton
              tier={"Standard"}
              desc={"A handy add-on with automations made for self-service, can be bundled with other plans."}
              price={"$ 13.99"}
              buttonTitle={"Start your free trial"}
              feature={['Upto 500 Submission / Mo.', 'Notification on upto 2 Email', 'Notification on upto 2 Phone Number', 'Custom Question']}
            />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: "column",
              backgroundColor: COLORS.lightGray1,
              width: 8,
            }} />

            <PriceButton
              tier={"Premium"}
              desc={"A solution for growing businesses looking for advanced features and dedicated support."}
              price={"$ 20.99"}
              buttonTitle={"Start your free trial"}
              feature={['Unlimited Submission / Mo.', 'Notification on upto 5 Email', 'Notification on upto 5 Phone Number', 'Custom Question', "Enquiry Dashboard"]}

            />
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
      }}>
        <p style={{
          ...FONTS.largeTitle,
          marginBlockEnd: 0,
          color: COLORS.gray
        }}>
          Frequently Asked Questions
        </p>
        <FlatList
          list={data}
          keyExtractor={item => `${item.id}`}
            renderItem={(item, index) => {
              return (
                <>
                  <FaqButton question={item.question} answer={item.answer} active={active} setactive={setActive}/>
                </>
              )

            }
            }
            renderWhenEmpty={() => (<Loading/> )}
        />
      </div>
      <Footer/>
    </div>
  )
}
