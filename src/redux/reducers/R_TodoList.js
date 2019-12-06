import { createFilter } from "react-native-search-filter";
import { types } from "../actions/A_TodoList";
import { Constants } from "../../config/Constants";

const INITIAL_STATE = {
  FullList: null,
  List: null,
  Loading: false,
  Error: null,
  Status: null,

  searchTerm: "",
  refresh: 0,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    //* SUNUCUDAN GETİRME İŞLEMLERİ
    case types.GET_SERVER_START:
      return {
        ...state,
        Loading: true,
        Error: null,
        FullList: null,
        Status: actions.type,
      };
    case types.GET_SERVER_SUCCESS:
      return {
        ...state,
        Loading: false,
        Error: null,
        FullList: actions.payload,
        List: actions.payload.slice(0, Constants.ListBatchSize),
        Status: null,
      };
    case types.GET_SERVER_FAIL:
      return {
        ...state,
        Loading: false,
        FullList: null,
        Error: actions.payload,
        Status: null,
      };

    //* LOCAL VERİTABANINDAN GETİRME İŞLEMLERİ
    case types.GET_DB_START:
      return {
        ...state,
        Loading: true,
        Error: null,
        FullList: null,
        Status: actions.type,
      };
    case types.GET_DB_SUCCESS:
      return {
        ...state,
        Loading: false,
        Error: null,
        FullList: actions.payload,
        List: actions.payload.slice(0, Constants.ListBatchSize),
        Status: null,
      };
    case types.GET_DB_FAIL:
      return {
        ...state,
        Loading: false,
        FullList: null,
        Error: actions.payload,
        Status: null,
      };

    //* REFRESH İŞLEMLERİ
    case types.REFRESH_LIST_START:
      return {
        ...state,
        Loading: true,
        Error: null,
        FullList: null,
        Status: actions.type,
      };
    case types.REFRESH_LIST_SUCCESS:
      return {
        ...state,
        Loading: false,
        Error: null,
        FullList: actions.payload,
        Status: null,
      };
    case types.REFRESH_LIST_FAIL:
      return {
        ...state,
        Loading: false,
        FullList: null,
        Error: actions.payload,
        Status: null,
      };

    //* LOAD ITEM
    case types.APPEND_LIST_START:
      return { ...state };
    case types.APPEND_LIST_SUCCESS:
      if (state.searchTerm == null || state.searchTerm == "")
        return {
          ...state,
          List: state.List.concat(
            state.FullList.slice(
              state.List.length,
              state.List.length + Constants.ListBatchSize,
            ),
          ),
        };
    case types.APPEND_LIST_FAIL:
      return { ...state, Error: actions.payload };

    //* SEARCH TERM CHANGE
    case types.CHANGE_SEARCHTERM:
      return {
        ...state,
        searchTerm: actions.payload,
        List: state.FullList.filter(
          createFilter(actions.payload, Constants.FilterColumns.TodoList),
        ),
      };

    default:
      return state;
  }
};
