import React from "react";

import { Header as RNEHeader, Icon } from "react-native-elements";

const Header = ({ Navigation, IsDarkTheme, _SyncData, _ToggleTheme }) => {
  const darkHeaderStyle = {
    backgroundColor: "black",
  };

  return (
    <RNEHeader
      containerStyle={IsDarkTheme ? darkHeaderStyle : ""}
      barStyle={IsDarkTheme ? "dark-content" : "light-content"}
      leftComponent={
        <Icon
          size={50}
          name="theme-light-dark"
          type="material-community"
          color="red"
          onPress={() => _ToggleTheme()}
        />
      }
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={
        <Icon
          name="cached"
          type="material"
          color="blue"
          onPress={() => _SyncData()}
        />
      }
    />
  );
};

export { Header };
