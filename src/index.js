import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Store from "./redux/Store";

import { HeaderLeft } from "./components/common";

import S_Example from "./components/screens/S_Example";
//...  add other screen imports

const RootStack = createStackNavigator(
  {
    Example: {
      screen: S_Example,
      navigationOptions: {
        //headerLeft: null,
        headerTitle: "ExampleSayafası",
      },
    },
    //... add screens
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerStyle: {
        backgroundColor: "#ff0000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }),
  },
);
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
