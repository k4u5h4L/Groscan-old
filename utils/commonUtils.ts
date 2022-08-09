const getUrl = (location: string) => {
    const l = document.createElement("a");
    l.href = location;
    return l;
};

export { getUrl };
