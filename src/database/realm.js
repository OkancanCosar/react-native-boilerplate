import Realm from "realm";

export class TodoList {
  static DbName = "tbl_TodoList";

  static ID = "id";
  static USERID = "userId";
  static TITLE = "title";
  static COMPLETED = "completed";
  static SYNCTIME = "syncTime";

  static schema = {
    name: TodoList.DbName,
    primaryKey: TodoList.ID,
    properties: {
      [TodoList.ID]: "int",
      [TodoList.USERID]: "int",
      [TodoList.TITLE]: "string",
      [TodoList.COMPLETED]: "bool",
      [TodoList.SYNCTIME]: "int",
    },
  };
}
//... other scheme init

export default new Realm({
  schema: [
    TodoList.schema,
    //... add other scheme
  ],
  schemaVersion: 1,
  migration: () => {},
});
