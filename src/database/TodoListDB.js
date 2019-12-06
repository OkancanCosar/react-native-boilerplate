import realm, { TodoList } from "./realm";
import { InteractionManager } from "react-native";
import { Constants } from "../config/Constants";
import { DBHelper } from "./DBHelper";
import { types } from "../redux/actions/A_TodoList";

const DbName = TodoList.DbName;
const Realm = realm.objects(TodoList.DbName);

export const isTableEmpty = () => {
  try {
    return Realm.slice(0, 1).length < 0;
  } catch (error) {
    console.error("TodoListDB::isTableEmpty:: " + error);
    return true;
  }
};
export const isTableOutOfDate = () => {
  try {
    const data = Realm.slice(0, 1);
    if (!data[0]) return true;
    return (
      DBHelper.getDayVal(data[0][TodoList.SYNCTIME]) !=
      DBHelper.getDayVal(DBHelper.getNow())
    );
  } catch (error) {
    console.error("TodoListDB::isTableOutOfDate:: " + error);
    return true;
  }
};

export const getAllTodoListFromDB = () => {
  try {
    return Realm.sorted(Constants.SortColumns.TodoList);
  } catch (error) {
    console.error("TodoListDB::getAllTodoListFromDB:: " + error);
    return false;
  }
};

export const insertTodoListIntoDB = (Data, dispatch) => {
  try {
    dispatch({ type: types.INSERT_DB_START });
    var SyncTime = DBHelper.getNow();

    InteractionManager.runAfterInteractions(() => {
      realm.write(() => {
        Data.forEach(element => {
          // data düzenlemeliyiz.
          element[TodoList.SYNCTIME] = SyncTime;

          // sunucu verisini local tablolara güncelle yada ekle.
          realm.create(DbName, element, true);
        });

        // syncTime'ı uygun olmayanı patlat.
        realm.delete(Realm.filtered(TodoList.SYNCTIME + "!= $0", SyncTime));
      });
    });

    dispatch({ type: types.INSERT_DB_SUCCESS });
    return true;
  } catch (error) {
    dispatch({ type: types.INSERT_DB_FAIL, payload: error });
    console.error("TodoListDB::insertTodoListIntoLocalDatabase:: " + error);
    return false;
  }
};

// TODO: silinecek
export const deleteAllPlans = () => {
  try {
    realm.write(() => {
      realm.delete(Realm);
    });
    console.log("gfdj");

    return true;
  } catch (error) {
    console.error("deleteAllPlans:: " + error);
    return false;
  }
};
