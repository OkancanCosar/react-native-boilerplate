import { Strings, CHelper, EndPoints } from "./";

const _fetchPost = async (URL, PARAMS) => {
  console.log(`POST: ${URL} => ${JSON.stringify(PARAMS)}`);

  return await fetch(URL, {
    method: Endpoints.MethodPost,
    headers: Endpoints.HEADER,
    body: JSON.stringify(PARAMS),
  });
};
const _fetchGet = async (URL, PARAMS) => {
  console.log(`GET: ${URL}${CHelper.objToQueryString(PARAMS)}`);

  return await fetch(`${URL}${CHelper.objToQueryString(PARAMS)}`, {
    method: EndPoints.MethodGet,
    headers: EndPoints.HEADER,
  });
};
const responseErrorHandler = async (status, dispatch, errType) => {
  let message = "";
  /**
   * Genelde servis işlemlerinde belirli statuslerde aynı işlemler yapılıyor.
   * 404, 500 vb. Bunun için genelleştirilebilir.
   */
  switch (status) {
    case 204:
      // Döndürülecek herhangi bir veri yok.
      message = Strings.Server204;
      break;
    case 404:
      // belirtilen servis yok.
      // * En önemli sebebi: bağlantı url'si doğru değildir. Onu döndürebiliriz.
      message = Strings.Server404;
      break;
    case 500:
      // sunucu hatası
      // * Sunucu doğru ancak cevap veremiyor. Büyük hata!
      message = Strings.Server500;
    default:
      // diğer hatalar veya tahmin edilemeyen işlemler.
      message = Strings.ServerUnknwon;
      break;
  }
  dispatch({ type: errType, payload: message });
};
const getTodoListNetwork = async () => {
  const URL = `${EndPoints.GetTodoItemsUrl}`;
  const PARAMS = {};

  return await _fetchGet(URL, PARAMS);
};
//... other created functions

export const Network = {
  responseErrorHandler,
  getTodoListNetwork,
  //... other functions
};