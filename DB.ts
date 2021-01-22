import * as SQLite from "expo-sqlite";
import { WebSQLDatabase } from "expo-sqlite";
import {
  PILLS_COLUMN_DAY,
  PILLS_COLUMN_ID,
  PILLS_COLUMN_NAME,
  PILLS_COLUMN_QUANTITY,
  PILLS_COLUMN_TAKEN,
  PILLS_COLUMN_TIME,
} from "./globalVariable";
export const getDB = async (
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  const database = await SQLite.openDatabase(
    "pills-alarm",
    "1.0.0",
    "pills database"
  );
  database?.transaction(
    async (tx) => {
      console.log("hello");
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS pills (${PILLS_COLUMN_ID} INTEGER PRIMARY KEY AUTOINCREMENT, ${PILLS_COLUMN_NAME} TEXT, ${PILLS_COLUMN_QUANTITY} INT, ${PILLS_COLUMN_TIME} TEXT, ${PILLS_COLUMN_DAY} TEXT, ${PILLS_COLUMN_TAKEN} INT)`,
        [],
        (txObjt) => {
          console.log("all good", txObjt);
        }
      );
    },
    (err) => {
      console.log(err, "error when initiating database");
    }
  );

  setState(database);
};
export const queryDB = (DB: WebSQLDatabase, query: string): any => {
  return new Promise((res, reject) => {
    DB?.transaction(
      (tx) => {
        tx.executeSql(query, [], (txObj, result) => {
          //console.log(result.rows);
          console.log(result);
          res(result.rows);
        });
      },
      (err) => {
        console.log(err);
        reject(err);
      }
    );
  });
};
// DB?.transaction(
//   (tx) => {
//     tx.executeSql("SELECT * FROM pills", [], (txObj, result) => {
//       console.log(result.rows);
//     });
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// const test = async () => {
//   DB?.transaction(
//     (tx) => {
//       tx.executeSql(`INSERT INTO pills ( name, quantity) VALUES ("banana",3)`);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// };
// //test();
