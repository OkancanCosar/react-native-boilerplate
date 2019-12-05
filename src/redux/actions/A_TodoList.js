import Store from "../Store";

import Network from "../../config/Network";

const CN = "TodoList";
const BatchSize = 5;
export const types = {
  GET_SERVER_START: `${CN} sunucudan alınmaya başladı.`,
  GET_SERVER_SUCCESS: `${CN} sunucudan alınması başarılı.`,
  GET_SERVER_FAIL: `${CN} sunucudan alınması başarısız`,

  GET_DB_START: `${CN} veritabanından alınmaya başladı.`,
  GET_DB_SUCCESS: `${CN} veritabanından alınması başarılı.`,
  GET_DB_FAIL: `${CN} veritabanından alınması başarısız`,

  POST_DB_START: `${CN} veritabanına alınmaya başladı.`,
  POST_DB_SUCCESS: `${CN} veritabanına kaydı başarılı.`,
  POST_DB_FAIL: `${CN} veritabanına kaydı başarısız`,

  REFRESH_LIST_START: `${CN} listesi yenilenmeye başladı.`,
  REFRESH_LIST_SUCCESS: `${CN} listesi yenilenmesi başarılı.`,
  REFRESH_LIST_FAIL: `${CN} listesi yenilenmesi başarısız`,

  APPEND_LIST_START: `${CN} listesine ekleme başladı.`,
  APPEND_LIST_SUCCESS: `${CN} listesine ekleme başarılı.`,
  APPEND_LIST_FAIL: `${CN} listesine ekleme başarısız`,

  CHANGE_SEARCHTERM: `${CN} listesine arama inputu değişti.`,
};

export const GetListData = () => async dispatch => {
  // online kontrolü
  if (true) {
    await getDataOnline(dispatch);
  } else {
    // offline
    await getDataOffline(dispatch);
  }
};

const getDataOffline = async dispatch => {};

const getDataOnline = async dispatch => {
  await dispatch({ type: types.GET_SERVER_START });
  try {
    let res = await Network.getTodoListNetwork();
    const status = await res.status;
    if (status == 200) {
      const restData = await res.json();

      await dispatch({ type: types.GET_SERVER_SUCCESS, payload: restData });

      // await saveToDb(restData, dispatch);
    } else
      Network.responseErrorHandler(status, dispatch, types.GET_SERVER_FAIL);
  } catch (error) {
    console.error("A_TodoList:getDataOnline::" + error);
    await dispatch({
      type: types.GET_SERVER_FAIL,
      payload: error,
    });
  }
};

export const syncData = () => async dispatch => {
  await getDataOnline(dispatch);
};
export const AddDataToListview = () => async dispatch => {
  try {
    await dispatch({ type: types.APPEND_LIST_START });

    await dispatch({ type: types.APPEND_LIST_SUCCESS });
  } catch (error) {
    console.error("A_TodoList:AddDataToListview::" + error);
    await dispatch({
      type: types.APPEND_LIST_FAIL,
      payload: error,
    });
  }
};

export const changeSearchTermText = text => async dispatch => {
  dispatch({ type: types.CHANGE_SEARCHTERM, payload: text });
};
