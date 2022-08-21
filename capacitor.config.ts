/// <reference types="@capacitor/local-notifications" />

import { CapacitorConfig } from "@capacitor/cli";
// import { internalIpV6Sync } from "internal-ip";

// const internalIp = internalIpV6Sync();

// console.log(`Current server on local IP ${internalIp}`);

const config: CapacitorConfig = {
    appId: "com.groscan",
    appName: "Groscan",
    webDir: "out",
    bundledWebRuntime: false,
    // server: {
    //     url: `http://192.168.1.3:3000`,
    // },
    plugins: {
        LocalNotifications: {
            smallIcon: "ic_stat_notifications_active",
            iconColor: "#0d6efd",
            sound: "assets/groscan_notification.mp3",
        },
    },
};

export default config;
