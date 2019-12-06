import { TodoList /*otherTables*/ } from "../database/realm";

export const Constants = {
  firstConstant: "okancancosar",
  ListBatchSize: 100,
  Threshold: 1,

  FilterColumns: {
    // Arama sırasında liste'de hangi sütünda arama yapılacak
    TodoList: ["title"],
    //... other filter columns
  },

  SortColumns: {
    // Veritabanından tüm veriyi getirirken; liste hangi sütüna göre sortlanacak
    TodoList: TodoList.ID,
    //... other sort columns
  },
};
