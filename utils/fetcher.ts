const fetcher = async (url: string): Promise<any> => {
    url = `${
        process?.env?.NEXT_PUBLIC_SERVER_URL ?? "https://groscan.vercel.app"
    }${url}`;
    console.log(`Fetching data from url: ${url}`);

    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(`fetched data from ${url}:`, data);

        return data;
    } catch (err) {
        console.error(err);

        alert("Error fetching");

        return null;
    }
};

export { fetcher };
