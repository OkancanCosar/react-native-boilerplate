import React from "react";
import { LargeList } from "react-native-largelist-v3";

import {
  LoadOrErr,
  EmptyList,
  LongListFooter,
  LongListHeader,
} from "./components";

let _list = null;

const LongListView = ({
  Loading,
  Error,
  Status,
  List,
  ListItem,
  ListItemProps,
  _RefreshData,
  _AddMoreData,
}) => {
  if (Loading || Error || Status)
    return <LoadOrErr Status={Status} Loading={Loading} AError={Error} />;
  if (List && List.length == 0) return <EmptyList />;

  return (
    <LargeList
      ref={ref => (_list = ref)}
      data={[{ items: List }]}
      heightForIndexPath={() => 88}
      loadingFooter={LongListFooter}
      refreshHeader={LongListHeader}
      onLoading={() => {
        _AddMoreData();
        setTimeout(() => _list.endLoading(), 200);
      }}
      onRefresh={() => {
        _RefreshData();
        setTimeout(() => _list.endRefresh(), 200);
      }}
      renderIndexPath={({ row }) => (
        <ListItem Item={List[row]} ListItemProps={ListItemProps} />
      )}
    />
  );
};

export { LongListView };
