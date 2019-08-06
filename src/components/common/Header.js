// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import libraries to use this functionality
import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//for Giving Styles
const styles = {
  viewStyle: {
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 8,
    elevation: 5,
    position: "relative",
    borderColor: "#00ffff",
    borderWidth: 2
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 30
  }
};

export { Header };
