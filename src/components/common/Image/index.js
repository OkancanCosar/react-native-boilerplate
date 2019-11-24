import React, { Component } from "react";
import { Image as RNImage, ActivityIndicator } from "react-native";

import { styles } from "./style";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  render() {
    //TODO: NEED IMAGE PLACEHOLDER
    // if (!this.state.loading) return <ActivityIndicator />;

    const { Style, Uri, Source } = this.props;

    return (
      <RNImage
        onLoadStart={e => this.setState({ loading: true })}
        onLoadEnd={e => this.setState({ loading: false })}
        style={Style}
        source={Source ? Source : { uri: Uri }}
      />
    );
  }
}

export { Image };
