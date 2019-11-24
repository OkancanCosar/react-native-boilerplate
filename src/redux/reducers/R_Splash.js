import { types } from "../actions/A_Splash";

const initialState = {
  connectionType: null,
  isConnected: false,
  isPortrait: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NET_CONNECTION_TYPE:
      // console.log('Connection type', action.payload.type);
      // console.log('Is connected?', action.payload.isConnected);
      // console.log('Is internetReachable?', action.payload.isInternetReachable);
      return {
        ...state,
        connectionType: action.payload.type,
        isConnected: action.payload.isInternetReachable,
      };

    case types.CHANGE_DIMENSION:
      return { ...state, isPortrait: action.payload };

    default:
      return state;
  }
};
