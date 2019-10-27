import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Text style={styles.center}> Geri </Text>
    </TouchableOpacity>
  );
};

export { HeaderLeft };
