import React from "react";
import { StyleSheet } from "react-native";
import { ListItem as RNEListItem } from "react-native-elements";

import { Image } from "../../../common";
import { Colors } from "../../../../config";

const ListItem = ({ Item, ListItemProps, IsDarkTheme }) => {
  const { navigation, refresh } = ListItemProps || {};

  return (
    <RNEListItem
      onPress={() => {
        console.log(refresh);
        console.log(navigation);
      }}
      containerStyle={styles(IsDarkTheme).containerStyle}
      titleStyle={styles(IsDarkTheme).titleStyle}
      subtitleStyle={styles(IsDarkTheme).subtitleStyle}
      title={Item.title}
      subtitle={`${Item.completed} (${Item.completed})`}
      leftAvatar={
        <Image
          Style={{ width: 50, height: 50 }}
          Uri={`https://dummyimage.com/90x90/f2ff00/ff0000.png&text=${Item.completed}`}
        />
      }
      bottomDivider
      chevron
    />
  );
};

const styles = IsDarkTheme =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: Colors(IsDarkTheme).ListBacground,
    },
    titleStyle: {
      color: Colors(IsDarkTheme).ListItemTextColor,
    },
    subtitleStyle: {
      color: Colors(IsDarkTheme).ListItemTextColor,
    },
  });

export { ListItem };
