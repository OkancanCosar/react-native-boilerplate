import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Lottie } from "../..";
import { Assets } from "../../../../assets";
import { Strings } from "../../../../config";

const EmptyList = ({}) => {
  return (
    <View style={styles.container}>
      <Lottie Source={Assets.Anims.notfound} />
      <Text style={styles.center}> {Strings.NoElement} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {},
});

export { EmptyList };
