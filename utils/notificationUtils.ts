import { LocalNotifications } from "@capacitor/local-notifications";

const scheduleNotification = async (
    id: number,
    title: string,
    body: string,
    date: Date
): Promise<void> => {
    try {
        if (typeof window != "undefined") {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        id: id,
                        title: title,
                        body: body,
                        schedule: {
                            at: date,
                        },
                        sound: "groscan_notification.mp3",
                    },
                ],
            });
        }
    } catch (err) {
        console.error(err);

        alert("Unable to schedule notification");
    }
};

const schedulePeriodicNotification = async (
    id: number,
    title: string,
    body: string,
    hours: number,
    minutes: number,
    seconds: number
): Promise<void> => {
    try {
        if (typeof window != "undefined") {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        id: id,
                        title: title,
                        body: body,
                        schedule: {
                            on: {
                                hour: hours,
                                minute: minutes,
                                second: seconds,
                            },
                        },
                        sound: "groscan_notification.mp3",
                    },
                ],
            });
        }
    } catch (err) {
        console.error(err);

        alert("Unable to schedule periodic notification");
    }
};

const sendNotification = async (
    id: number,
    title: string,
    body: string
): Promise<void> => {
    try {
        if (typeof window != "undefined") {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        id: id,
                        title: title,
                        body: body,
                        sound: "groscan_notification.mp3",
                    },
                ],
            });
        }
    } catch (err) {
        console.error(err);

        alert("Unable to send notification");
    }
};

export { scheduleNotification, schedulePeriodicNotification, sendNotification };
