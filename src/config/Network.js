import EndPoints from "./EndPoints";

const _fetchPost = async (URL, PARAMS) => {
  console.log(`POST: ${URL} => ${JSON.stringify(PARAMS)}`);

  return await fetch(URL, {
    method: Endpoints.MethodPost,
    headers: Endpoints.HEADER,
    body: JSON.stringify(PARAMS),
  });
};
const objToQueryString = obj => {
  if (obj) return "";
  const keyValuePairs = ["?"];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join("&");
};
const _fetchGet = async (URL, PARAMS) => {
  console.log(`GET: ${URL}${objToQueryString(PARAMS)}`);

  return await fetch(`${URL}${objToQueryString(PARAMS)}`, {
    method: EndPoints.MethodGet,
    headers: EndPoints.HEADER,
  });
};
export default Network = {
  responseErrorHandler: async (status, dispatch, errType) => {
    let message = "";
    /**
     * Genelde servis işlemlerinde belirli statuslerde aynı işlemler yapılıyor.
     * 404, 500 vb. Bunun için genelleştirilebilir.
     */
    switch (status) {
      case 204:
        // Döndürülecek herhangi bir veri yok.
        message = "Gösterilebilecek herhangi bir veri bulunamadı.";
        break;
      case 404:
        // belirtilen servis yok.
        // * En önemli sebebi: bağlantı url'si doğru değildir. Onu döndürebiliriz.
        message = "Hata. Ayarlardan linki doğru girdiğinize emin olun.";
        break;
      case 500:
        // sunucu hatası
        // * Sunucu doğru ancak cevap veremiyor. Büyük hata!
        message = "Sunucu ile iletişim kurulamadı.";
      default:
        // diğer hatalar veya tahmin edilemeyen işlemler.
        message = "Tahmin edilemeyen bir hata oluştu.";
        break;
    }
    await dispatch({ type: errType, payload: message });
  },
  // networkFunctions
  getTodoListNetwork: async () => {
    const URL = `${EndPoints.GetTodoItemsUrl}`;
    const PARAMS = {};

    return await _fetchGet(URL, PARAMS);
  },
};
