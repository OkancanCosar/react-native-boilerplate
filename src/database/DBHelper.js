import moment from "moment";
import "moment/locale/tr";

const getNow = () => {
  moment.locale("tr");
  return moment().unix();
};
const getFormatted = (date, format) => {
  moment.locale("tr");
  return moment.unix(date).format(format);
};
const fromNow = date => {
  moment.locale("tr");
  moment.updateLocale("tr", {
    relativeTime: {
      past: input => (input === "şuanda" ? input : input + " önce"),
      s: "şuanda",
      future: "%s sonra",
      ss: "%d saniye",
      m: "1 dakika",
      mm: "%d dakika",
      h: "1 saat",
      hh: "%d saat",
      d: "1 gün",
      dd: "%d gün",
      M: "1 ay",
      MM: "%d ay",
      y: "1 yıl",
      yy: "%d yıl",
    },
  });
  return moment.unix(date).fromNow();
};
const getDayVal = date => {
  moment.locale("tr");
  return moment.unix(date).format("DD");
};

export const DBHelper = {
  getNow,
  getFormatted,
  fromNow,
  getDayVal,
};
