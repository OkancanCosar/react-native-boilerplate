import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { styles } from "./style";
import { addConnectionListeners } from "../../../redux/actions/A_Splash";

class Splash extends Component {
  componentDidMount = () => {
    const { __, navigation } = this.props;

    __.addConnectionListeners();
    navigation.navigate("TodoList");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.center}>Splash sayfasındasın.</Text>
      </View>
    );
  }
}

export default connect(
  __ => ({
    //isAuth: state.R_Welcome.isAuth,
  }),
  dispatch => ({
    __: bindActionCreators(Object.assign({ addConnectionListeners }), dispatch),
  }),
)(Splash);
