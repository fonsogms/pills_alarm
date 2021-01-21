import { Dimensions } from "react-native";

export const screen = Dimensions.get("screen");
export const PILLS_COLUMN_NAME = "name";
export const PILLS_COLUMN_QUANTITY = "quantity";
export const PILLS_COLUMN_ID = "id";
export const PILLS_COLUMN_TIME = "time";
export const PILLS_COLUMN_DAY = "day";

export const colors = {
  bone: "#DFE4DE",
  surf_green: "#126F80",
  carnation: "#F95151",
  smoky_blue: "#525E76",
  whitey: "#fff",
  larchmare: "#7BC5AE",
  observatory: "#028C6A",
};
export const fonts = {
  roboto_medium: "Roboto-Medium",
  roboto_bold: "Roboto-Bold",
  roboto_regular: "Roboto-Regular",
};
export const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};
