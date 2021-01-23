import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    console.log("here4");

    return;
  }
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  console.log(token, "this is the token!!");
}

export const setPushNotifications = async () => {
  await registerForPushNotificationsAsync();
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

Notifications.scheduleNotificationAsync({
  content: {
    title: "Time's up!",
    body: "Change sides!",
  },
  trigger: {
    seconds: 60,
  },
});
Notifications.cancelAllScheduledNotificationsAsync();
console.log("hello");
registerForPushNotificationsAsync();
