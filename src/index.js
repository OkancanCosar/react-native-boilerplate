import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Store from "./redux/Store";

import S_TodoList from "./components/screens/S_TodoList";
import S_Splash from "./components/screens/S_Splash";
//...  add other screen imports

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: S_Splash,
    },
    TodoList: {
      screen: S_TodoList,
    },
    //... add screens
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null,
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
