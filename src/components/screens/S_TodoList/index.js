import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { LongListView } from "../../common";
import { Header, ListItem } from "./components";

import { Strings } from "../../../config";

import { styles } from "./style";
import {
  GetListData,
  syncData,
  AddDataToListview,
  changeSearchTermText,
} from "../../../redux/actions/A_TodoList";

class TodoList extends Component {
  componentDidMount = () => {
    this.props.__.GetListData();
  };

  render() {
    let {
      __,
      navigation,
      FullList,
      List,
      Loading,
      Error,
      Status,
      searchTerm,

      refresh,
    } = this.props;

    return (
      <View style={styles.container}>
        <Header Navigation={navigation} _SyncData={__.syncData} />
        <Text style={styles.center}>{Strings.s1}</Text>
        <LongListView
          _RefreshData={__.GetListData}
          _AddMoreData={__.AddDataToListview}
          List={List}
          Loading={Loading}
          Error={Error}
          Status={Status}
          ListItem={ListItem}
          ListItemProps={{ navigation: navigation, refresh: refresh }}
          SearchText={searchTerm}
          _OnSearchTextChange={__.changeSearchTermText}
        />
      </View>
    );
  }
}

export default connect(
  __ => ({
    List: __.R_TodoList.List,
    FullList: __.R_TodoList.FullList,
    Loading: __.R_TodoList.Loading,
    Error: __.R_TodoList.Error,
    Status: __.R_TodoList.Status,
    searchTerm: __.R_TodoList.searchTerm,

    refresh: __.R_TodoList.refresh,
  }),
  dispatch => ({
    __: bindActionCreators(
      Object.assign({
        GetListData,
        syncData,
        AddDataToListview,
        changeSearchTermText,
      }),
      dispatch,
    ),
  }),
)(TodoList);
