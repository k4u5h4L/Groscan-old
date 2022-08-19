import { Category } from "@prisma/client";

const getUrl = (location: string) => {
    const l = document.createElement("a");
    l.href = location;
    return l;
};

const forceLower = (strInput) => {
    strInput.value = strInput.value.toLowerCase();
};

const checkMongoID = (id: string): boolean => {
    const regex = new RegExp("^[0-9a-fA-F]{24}$");

    return regex.test(id);
};

const getNumberOfCategories = (
    categories: Category[],
    name: string
): number => {
    return categories.reduce(
        (prev, cur) =>
            cur.name.toLowerCase().includes(name.toLowerCase())
                ? prev + 1
                : prev,
        0
    );
};

export { getUrl, forceLower, checkMongoID, getNumberOfCategories };
