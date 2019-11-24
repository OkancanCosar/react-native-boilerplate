import { Dimensions } from "react-native";

import NetInfo from "@react-native-community/netinfo";

export const types = {
  CHANGE_NET_CONNECTION_TYPE: "İnternet bağlantı durumu değişti.",
  CHANGE_DIMENSION: "Dimension değişti",
};

export const addConnectionListeners = navigation => async dispatch => {
  /** İnternet bağlantısı listener */
  NetInfo.addEventListener(state => {
    dispatch({ type: types.CHANGE_NET_CONNECTION_TYPE, payload: state });
  });

  /** Dimension eklendi */
  const dim = Dimensions.get("screen");
  const stat = dim.height >= dim.width ? true : false;
  dispatch({ type: types.CHANGE_DIMENSION, payload: stat });
  /** Dimension change listener */
  Dimensions.addEventListener("change", () => {
    const dim = Dimensions.get("screen");
    const stat = dim.height >= dim.width ? true : false;
    dispatch({ type: types.CHANGE_DIMENSION, payload: stat });
  });
};
