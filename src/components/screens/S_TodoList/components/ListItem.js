import React from "react";

import { ListItem as RNEListItem } from "react-native-elements";

import { Image } from "../../../common";

const ListItem = ({ Item }) => {
  return (
    <RNEListItem
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

export { ListItem };
