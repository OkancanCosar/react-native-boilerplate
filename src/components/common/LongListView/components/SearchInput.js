import React from "react";
import { SearchBar } from "react-native-elements";

import { Strings } from "../../../../config";

const SearchInput = ({ SearchText, IsDarkTheme, _OnChangeText }) => {
  return (
    <SearchBar
      cancelButtonTitle={Strings.Clean}
      lightTheme={!IsDarkTheme}
      placeholder={Strings.SearchInputPlaceholder}
      onChangeText={_OnChangeText}
      value={SearchText}
    />
  );
};

export { SearchInput };
