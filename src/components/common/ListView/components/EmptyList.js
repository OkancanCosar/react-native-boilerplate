import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyList = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.center}> burda eleman yok </Text>
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
