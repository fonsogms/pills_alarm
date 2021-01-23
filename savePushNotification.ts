import * as Notifications from "expo-notifications";
export const pushIds = {};
export const createPushNotification = (
  name: string,
  date: string,
  time: string
) => {
  const trigger = new Date(date + " " + time);
  Notifications.scheduleNotificationAsync({
    content: {
      title: name,
      body: "Time to take " + name,
    },
    trigger,
  });
  console.log("saving push notification");
};
