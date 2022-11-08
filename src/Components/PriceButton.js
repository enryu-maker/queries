import React from 'react'
import TextButton from './TextButton'
import { COLORS,FONTS, SIZES } from '../Theme/Theme';
import FlatList from 'flatlist-react';
import Feature from './Feature';
import Loading from './Loading';

export default function PriceButton({
    tier,
    price,
    desc,
    buttonTitle,
    feature
}) {

  return (
    <div 
    
    style={{
        display: 'flex',
        alignItems: 'center',
        // justifyContent: "space-evenly",
        height: '100%',
        flexDirection:"column",
        backgroundColor:COLORS.white,
        width:'25%',
        borderRadius:SIZES.b_rad,

      }}>
        <p style={{
          ...FONTS.h1,
          color:COLORS.black,
          letterSpacing:2

        }}>
          {tier}
        </p>
        <p style={{
          ...FONTS.body3,
          textAlign:"center",
          padding:5,
          color:COLORS.gray
        }}>
        {desc}
        </p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 3,
        backgroundColor:COLORS.layout,
        width:"80%",
      }}/>
      <p style={{
        ...FONTS.largeTitle,
        color:COLORS.black

      }}>
        {price} /mo.
      </p>
      <TextButton label={buttonTitle} 
      labelStyle={{
        color:tier==="Free"?COLORS.Primary:COLORS.white
      }}
      buttonContainerStyle={tier==="Free"?{
        border: '2px solid rgb(230, 230, 230)',
        backgroundColor:COLORS.white
      }:{}}/>
     
      <p style={{
          ...FONTS.h2,
          color:COLORS.gray,
          letterSpacing:2

        }}>
          Features:
        </p>
        <div> 
        <FlatList
          list={feature}
          keyExtractor={item => `${item.id}`}
            renderItem={(item, index) => {
              return (
                <>
                  <Feature desc={item}/>
                </>
              )

            }
            }
            renderWhenEmpty={() => (<Loading/> )}
        />
        </div>
        </div>
  )
}
