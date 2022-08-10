const fetcher = async (url: string): Promise<any> => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

export { fetcher };
