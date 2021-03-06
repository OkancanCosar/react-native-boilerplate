import Store from "../Store";
import { Network, Strings } from "../../config";
import {
  insertTodoListIntoDB,
  getAllTodoListFromDB,
  isTableEmpty,
  isTableOutOfDate,
} from "../../database/TodoListDB";

const CN = "TodoList";
export const types = {
  GET_SERVER_START: `${CN} sunucudan alınmaya başladı.`,
  GET_SERVER_SUCCESS: `${CN} sunucudan alınması başarılı.`,
  GET_SERVER_FAIL: `${CN} sunucudan alınması başarısız`,

  GET_DB_START: `${CN} veritabanından alınmaya başladı.`,
  GET_DB_SUCCESS: `${CN} veritabanından alınması başarılı.`,
  GET_DB_FAIL: `${CN} veritabanından alınması başarısız`,

  INSERT_DB_START: `${CN} veritabanına alınmaya başladı.`,
  INSERT_DB_SUCCESS: `${CN} veritabanına kaydı başarılı.`,
  INSERT_DB_FAIL: `${CN} veritabanına kaydı başarısız`,

  REFRESH_LIST_START: `${CN} listesi yenilenmeye başladı.`,
  REFRESH_LIST_SUCCESS: `${CN} listesi yenilenmesi başarılı.`,
  REFRESH_LIST_FAIL: `${CN} listesi yenilenmesi başarısız`,

  APPEND_LIST_START: `${CN} listesine ekleme başladı.`,
  APPEND_LIST_SUCCESS: `${CN} listesine ekleme başarılı.`,
  APPEND_LIST_FAIL: `${CN} listesine ekleme başarısız`,

  CHANGE_SEARCHTERM: `${CN} listesine arama inputu değişti.`,
};

export const GetListData = () => async dispatch => {
  /**
    Online  -> tableEmpty(T)       -> getDataFromServer
    Online  -> tableEmpty(F)       -> isTableOutOfDate(T)   -> getDataFromServer
    Online  -> tableEmpty(F)       -> isTableOutOfDate(F)   -> getDataFromLocalDB
    Offline -> getDataFromLocalDB
   */
  if (Store.getState().R_Splash.isConnected) {
    if (isTableEmpty()) await getDataOnline(dispatch);
    else {
      if (isTableOutOfDate()) await getDataOnline(dispatch);
      else getDataOffline(dispatch);
    }
  } else getDataOffline(dispatch);
};

const getDataOffline = dispatch => {
  dispatch({ type: types.GET_DB_START });
  try {
    dispatch({
      type: types.GET_DB_SUCCESS,
      payload: getAllTodoListFromDB(),
    });
  } catch (error) {
    console.error("A_TodoList:getDataOffline::" + error);
    dispatch({ type: types.GET_DB_FAIL, payload: error });
  }
};

const getDataOnline = async dispatch => {
  dispatch({ type: types.GET_SERVER_START });
  try {
    let res = await Network.getTodoListNetwork();
    const status = res.status;
    if (status == 200) {
      const restData = await res.json();

      if (restData.length) {
        dispatch({ type: types.GET_SERVER_SUCCESS, payload: restData });
        insertTodoListIntoDB(restData, dispatch);
      } else
        dispatch({
          type: types.GET_SERVER_FAIL,
          payload: Strings.ServerUnexpectedData,
        });
    } else
      Network.responseErrorHandler(status, dispatch, types.GET_SERVER_FAIL);
  } catch (error) {
    console.error("A_TodoList:getDataOnline::" + error);
    dispatch({
      type: types.GET_SERVER_FAIL,
      payload: error,
    });
  }
};

export const syncData = () => async dispatch => {
  try {
    dispatch({ type: types.REFRESH_LIST_START });
    await getDataOnline(dispatch);
    dispatch({ type: types.REFRESH_LIST_SUCCESS });
  } catch (error) {
    console.error("A_TodoList:AddDataToListview::" + error);
    dispatch({
      type: types.REFRESH_LIST_FAIL,
      payload: error,
    });
  }
};
export const AddDataToListview = () => dispatch => {
  try {
    dispatch({ type: types.APPEND_LIST_START });
    dispatch({ type: types.APPEND_LIST_SUCCESS });
  } catch (error) {
    console.error("A_TodoList:AddDataToListview::" + error);
    dispatch({
      type: types.APPEND_LIST_FAIL,
      payload: error,
    });
  }
};

export const changeSearchTermText = text => dispatch => {
  dispatch({ type: types.CHANGE_SEARCHTERM, payload: text });
};
