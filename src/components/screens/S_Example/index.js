import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { styles } from "./style";
import {} from "../../../redux/actions/A_Example";

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.center}>Example sayfasındasın.</Text>
      </View>
    );
  }
}

export default connect(
  __ => ({
    //isAuth: state.R_Welcome.isAuth,
  }),
  dispatch => ({
    __: bindActionCreators(Object.assign({}), dispatch),
  }),
)(Example);
