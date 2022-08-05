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
    //     url: `http://192.168.1.254:3000`,
    // },
};

export default config;
