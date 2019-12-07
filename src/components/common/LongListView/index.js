import React from "react";
import { View } from "react-native";
import { LargeList } from "react-native-largelist-v3";

import {
  LoadOrErr,
  EmptyList,
  LongListFooter,
  LongListHeader,
  SearchInput,
} from "./components";
import { styles } from "./style";

let _list = null;

const LongListView = ({
  Loading,
  Error,
  Status,
  List,
  ListItem,
  ListItemProps,
  IsDarkTheme,
  _RefreshData,
  _AddMoreData,
  SearchText,
  _OnSearchTextChange,
}) => {
  if (Loading || Error || Status)
    return <LoadOrErr Status={Status} Loading={Loading} Error={Error} />;
  if (!SearchText && List && List.length == 0) return <EmptyList />;

  return (
    <View style={styles.container}>
      <SearchInput
        IsDarkTheme={IsDarkTheme}
        SearchText={SearchText}
        _OnChangeText={_OnSearchTextChange}
      />
      <LargeList
        ref={ref => (_list = ref)}
        data={[{ items: List }]}
        heightForIndexPath={() => 88}
        loadingFooter={LongListFooter}
        refreshHeader={LongListHeader}
        onLoading={() => {
          _AddMoreData();
          setTimeout(() => _list && _list.endLoading(), 200);
        }}
        onRefresh={() => {
          _RefreshData();
          setTimeout(() => _list && _list.endRefresh(), 200);
        }}
        renderIndexPath={({ row }) => (
          <ListItem
            Item={List[row]}
            ListItemProps={ListItemProps}
            IsDarkTheme={IsDarkTheme}
          />
        )}
      />
    </View>
  );
};

export { LongListView };
