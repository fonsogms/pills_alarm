import { NewPill } from "./components/AddPill/newPill.interface";
import * as SQLite from "expo-sqlite";
import { queryDB } from "./DB";
import {
  PILLS_COLUMN_DAY,
  PILLS_COLUMN_NAME,
  PILLS_COLUMN_QUANTITY,
  PILLS_COLUMN_TIME,
} from "./globalVariable";
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
    return `INSERT INTO PILLS (${PILLS_COLUMN_NAME}, ${PILLS_COLUMN_QUANTITY}, ${PILLS_COLUMN_TIME}, ${PILLS_COLUMN_DAY}
    VALUES (${name}, ${quantity}, ${time}, ${day});`;
  };
  for (let day = 0; day <= newPill.days; day++) {
    console.log("hola");
  }
};
