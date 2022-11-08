import React from "react";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";
export default function InputForm({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg,
  maxLength,
  keytype = "",
  onPressIn,
  multiple,
  type,
}) {

  return (
    <>
      <div
        style={{
          ...containerStyle,
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          flexFlow: "column",
          marginBottom: 30,
          borderWidth: 0,
          borderBottomWidth: 12,
        }}
      >
        <div
          style={{
            width: 284,
            justifyContent: "space-between",
            display: "flex",
            flexFlow: "row",
            alignSelf: "center",
            height: 20,
          }}
        >
            <text style={{ color: COLORS.black, ...FONTS.body5 }}>{label}</text>
          <text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</text>
        </div>
        <div
          style={{
            display: "inline-flex",
            flexFlow: "row",
            height: 50,
            paddingHorizontal: SIZES.padding,
            marginTop: 5,
            width: 220,
            alignSelf: "center",
            ...inputContainerStyle,
          }}>

          {prependComponent}
          <input
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
              height: 45,
              alignSelf: "center",
              paddingLeft: 20,
              ...FONTS.body4,
              outline: "none",
              ...inputStyle,

            }}
            multiple={multiple}
            value={value}
            placeholder={placeholder}
            color={COLORS.black}
            type={type}
            onChange={onChange}
          />
          {appendComponent}
        </div>
      </div>
    </>
  );
}