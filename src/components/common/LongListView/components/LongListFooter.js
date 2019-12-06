import React from "react";
import { LoadingFooter } from "react-native-spring-scrollview/LoadingFooter";
import {
  ActivityIndicator,
  Animated,
  View,
  StyleSheet,
  Text,
} from "react-native";

import { Assets } from "../../../../assets";
import { Strings } from "../../../../config";

export class LongListFooter extends LoadingFooter {
  static height = 80;

  static style = "stickyContent";

  render() {
    if (this.state.status === "allLoaded")
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.getTitle()}</Text>
        </View>
      );
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
    if (s === "loading" || s === "cancelLoading" || s === "rebound") {
      return <ActivityIndicator color={"gray"} />;
    }
    const { maxHeight, offset, bottomOffset } = this.props;
    return (
      <Animated.Image
        source={Assets.Images.arrow}
        style={{
          transform: [
            {
              rotate: offset.interpolate({
                inputRange: [
                  bottomOffset - 1 + 45,
                  bottomOffset + 45,
                  bottomOffset + maxHeight,
                  bottomOffset + maxHeight + 1,
                ],
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
      case "dragging":
      case "waiting":
        return Strings.ListFooterS1;
      case "draggingEnough":
        return Strings.ListFooterS2;
      case "loading":
        return Strings.ListFooterS3;
      case "draggingCancel":
        return Strings.ListFooterS4;
      case "rebound":
        return Strings.ListFooterS5;
      case "allLoaded":
        return Strings.ListFooterS6;
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
