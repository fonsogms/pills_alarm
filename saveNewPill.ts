import { NewPill } from "./components/AddPill/newPill.interface";
import * as SQLite from "expo-sqlite";
import { queryDB } from "./DB";
import {
  convertTime12to24,
  PILLS_COLUMN_DAY,
  PILLS_COLUMN_NAME,
  PILLS_COLUMN_QUANTITY,
  PILLS_COLUMN_TAKEN,
  PILLS_COLUMN_TIME,
} from "./globalVariable";
import { createPushNotification } from "./savePushNotification";
export const savePills = async (
  newPill: NewPill,
  database: SQLite.WebSQLDatabase
) => {
  const insertQuery = (
    name: string,
    quantity: string,
    time: string,
    day: string
  ): string => {
    return `INSERT INTO pills (${PILLS_COLUMN_NAME}, ${PILLS_COLUMN_QUANTITY}, ${PILLS_COLUMN_TIME}, ${PILLS_COLUMN_DAY}, ${PILLS_COLUMN_TAKEN})
    VALUES ("${name}", "${quantity}", "${time}", "${day}", 0);`;
  };
  for (let day = 0; day < newPill.days; day++) {
    const startingDate = newPill.startingDate;
    const followingDay = new Date(startingDate);
    followingDay.setDate(followingDay.getDate() + day);
    for (let { date: hour } of newPill.hours) {
      // console.log(convertTime12to24(hour.toLocaleTimeString()));
      const pillDate = followingDay.toDateString();
      const pillHour = hour.toLocaleTimeString();
      console.log(
        insertQuery(newPill.name, newPill.quantity, pillDate, pillHour)
      );
      const response = await queryDB(
        database,
        insertQuery(newPill.name, newPill.quantity, pillHour, pillDate)
      );
      createPushNotification(newPill.name, pillDate, pillHour);
      console.log(response);
    }
  }
};
