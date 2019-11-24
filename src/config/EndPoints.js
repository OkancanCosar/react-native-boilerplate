const EndPoint1 = "https://jsonplaceholder.typicode.com";

export default EndPoints = {
  // network
  MethodPost: "POST",
  MethodGet: "GET",
  HEADER: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  // endpoints
  GetTodoItemsUrl: `${EndPoint1}/todos`,
};
