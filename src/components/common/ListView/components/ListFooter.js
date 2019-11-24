import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ListFooter = ({ Disable, _LoadMoreData }) => {
  return (
    <TouchableOpacity
      style={[styles.footer, Disable ? styles.hide : styles.show]}
      activeOpacity={0.9}
      onPress={_LoadMoreData}
    >
      <Text style={styles.btnText}>daha fazla</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  footer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
  },
});
export { ListFooter };
