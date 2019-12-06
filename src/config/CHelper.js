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
  
  export const CHelper = { objToQueryString };
  