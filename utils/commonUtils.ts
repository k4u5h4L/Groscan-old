const getUrl = (location: string) => {
    const l = document.createElement("a");
    l.href = location;
    return l;
};

const forceLower = (strInput) => {
    strInput.value = strInput.value.toLowerCase();
};

export { getUrl, forceLower };
