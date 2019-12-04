import React from "react";
import { FlatList, RefreshControl } from "react-native";

import { LoadOrErr, EmptyList, ListFooter } from "./components";

import { styles } from "./style";
import Constants from "../../../config/Constants";

const ListView = ({
  Loading,
  Error,
  Status,
  List,
  ListItem,
  ListItemProps,
  Refreshing,
  _RefreshData,
  _AddMoreData,
}) => {
  if (Loading || Error || Status) {
    return <LoadOrErr Status={Status} Loading={Loading} AError={Error} />;
  }
  return (
    <FlatList
      data={List}
      renderItem={({ item }) => <ListItem Item={item} ListItemProps={ListItemProps} />}
      keyExtractor={i => Math.random().toString()}
      contentContainerStyle={{ flexGrow: 1 }}
      ListEmptyComponent={() => <EmptyList />}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={() => _RefreshData()}
        />
      }
      onEndReachedThreshold={Constants.Threshold}
      onEndReached={() => _AddMoreData()}
    />
  );
};

export { ListView };
