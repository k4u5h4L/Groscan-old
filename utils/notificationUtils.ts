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
                    },
                ],
            });
        }
    } catch (err) {
        console.error(err);

        alert("Unable to schedule notification");
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
                    },
                ],
            });
        }
    } catch (err) {
        console.error(err);

        alert("Unable to send notification");
    }
};

export { scheduleNotification, sendNotification };
