import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Lottie } from "../..";
import Assets from "../../../../assets";

const LoadOrErr = ({ Loading, Error, Status }) => {
  if (Status) {
    return (
      <View style={styles.container}>
        <Lottie Source={Assets.Anims.loading} />
        <Text style={styles.statusText}> {Status} </Text>
      </View>
    );
  }

  // Eğer loading aktifse
  if (Loading) {
    return (
      <View style={styles.container}>
        <Lottie Source={Assets.Anims.loading} />
      </View>
    );
  } else {
    // Eğer Hata dönmüşse
    return (
      <View style={styles.container}>
        <Lottie Source={Assets.Anims.error} />
        <Text style={styles.errText}> {Error} </Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  errText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  statusText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export { LoadOrErr };
