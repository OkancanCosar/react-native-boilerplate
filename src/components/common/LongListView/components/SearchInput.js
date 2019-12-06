import React from "react";
import { SearchBar } from "react-native-elements";

import { Strings } from "../../../../config";

const SearchInput = ({ SearchText, _OnChangeText }) => {
  return (
    <SearchBar
      platform={"ios"}
      cancelButtonTitle={Strings.Clean}
      lightTheme={true}
      placeholder={Strings.SearchInputPlaceholder}
      onChangeText={_OnChangeText}
      value={SearchText}
    />
  );
};

export { SearchInput };
