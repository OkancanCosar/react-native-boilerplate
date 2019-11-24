import React from "react";

import { Header as RNEHeader, Icon } from "react-native-elements";

const Header = ({ Navigation, _SyncData }) => {
  return (
    <RNEHeader
      leftComponent={{ icon: "rowing", color: "#fff" }}
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
