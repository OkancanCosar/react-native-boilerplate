import React from "react";
import { RefreshHeader } from "react-native-spring-scrollview/RefreshHeader";
import {
  ActivityIndicator,
  Animated,
  View,
  StyleSheet,
  Text,
} from "react-native";

import { Assets } from "../../../../assets";
import { Strings } from "../../../../config";

export class LongListHeader extends RefreshHeader {
  static height = 80;

  static style = "stickyContent";

  render() {
    return (
      <View style={styles.container}>
        {this._renderIcon()}
        <View style={styles.rContainer}>
          <Text style={styles.text}>{this.getTitle()}</Text>
          {this.renderContent()}
        </View>
      </View>
    );
  }

  _renderIcon() {
    const s = this.state.status;
    if (s === "refreshing" || s === "rebound") {
      return <ActivityIndicator color={"gray"} />;
    }
    const { maxHeight, offset } = this.props;
    return (
      <Animated.Image
        source={Assets.Images.arrow}
        style={{
          transform: [
            {
              rotate: offset.interpolate({
                inputRange: [-maxHeight - 1 - 10, -maxHeight - 10, -50, -49],
                outputRange: ["180deg", "180deg", "0deg", "0deg"],
              }),
            },
          ],
        }}
      />
    );
  }

  renderContent() {
    return null;
  }

  getTitle() {
    switch (this.state.status) {
      case "pulling":
      case "waiting":
        return Strings.ListHeaderS1;
      case "pullingEnough":
        return Strings.ListHeaderS2;
      case "refreshing":
        return Strings.ListHeaderS3;
      case "pullingCancel":
        return Strings.ListHeaderS4;
      case "rebound":
        return Strings.ListHeaderS5;
      default:
        return "";
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rContainer: {
    marginLeft: 20,
  },
  text: {
    marginVertical: 5,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    width: 140,
  },
});
