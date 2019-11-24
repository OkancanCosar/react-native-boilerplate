import React from "react";
import LottieView from "lottie-react-native";

import { styles } from "./style";

const Lottie = ({ Source }) => {
  return <LottieView style={styles.container} source={Source} autoPlay loop />;
};

export { Lottie };
