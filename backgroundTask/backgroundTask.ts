import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import * as SQLite from "expo-sqlite";
import { queryDB } from "../DB";
const TASK_NAME = "BACKGROUND_TASK";

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    const db = await SQLite.openDatabase("pills");
    const response = queryDB(db, "SELECT * FROM PILLS");
    console.log(response, "this is the task manager");
    return response
      ? BackgroundFetch.Result.NewData
      : BackgroundFetch.Result.NoData;
  } catch (err) {
    return BackgroundFetch.Result.Failed;
  }
});

export const RegisterBackgroundTask = async () => {
  try {
    await BackgroundFetch.registerTaskAsync(TASK_NAME, {
      minimumInterval: 5, // seconds,
    });
    console.log("Task registered");
  } catch (err) {
    console.log("Task Register failed:", err);
  }
};
