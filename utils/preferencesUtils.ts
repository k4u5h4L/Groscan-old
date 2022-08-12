import { Preferences } from "@capacitor/preferences";

const setPref = async (key: string, value: any): Promise<void> => {
    // await Preferences.set({
    //     key: key,
    //     value: JSON.stringify(value),
    // });
    localStorage.setItem(key, JSON.stringify(value));
};

const getPref = async (key: string): Promise<any> => {
    // const { value } = await Preferences.get({ key: key });

    // return JSON.parse(value);

    return JSON.parse(localStorage.getItem(key));
};

const removePref = async (key: string): Promise<boolean> => {
    // try {
    //     await Preferences.remove({ key: key });
    //     return true;
    // } catch (err) {
    //     console.error(err);
    //     return false;
    // }

    localStorage.removeItem(key);
    return true;
};

const clearAllPref = async (): Promise<boolean> => {
    try {
        await Preferences.clear();
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export { setPref, getPref, removePref, clearAllPref };
