import { setPref } from "@/utils/preferencesUtils";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

type PropType = {
    history: string[];
};

function SearchMain({ history }: PropType) {
    const router = useRouter();
    const searchRef = useRef<any>();
    const [searchHistory, setSearchHistory] = useState<string[]>(history);

    const removeSearchHandler = async (searchString: string): Promise<void> => {
        setSearchHistory((prev) => {
            return prev.filter(
                (item) => searchString.toLowerCase() != item.toLowerCase()
            );
        });
        await setPref("searchHistory", searchHistory);
    };

    const handleSubmit = async () => {
        const searchString: string = searchRef.current.value;

        setSearchHistory((prev) => {
            prev.push(searchString);
            return prev;
        });

        await setPref("searchHistory", searchHistory);

        router.push(`/results?q=${encodeURIComponent(searchString)}`);
    };

    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <a onClick={() => router.back()} className="btn-header">
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <form onSubmit={() => handleSubmit()}>
                    <div className="w-100">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control input-dark"
                            ref={searchRef}
                        />
                    </div>
                </form>
            </header>

            <main className="app-content">
                {searchHistory.length > 0 ? (
                    <section className="p-3">
                        <ul className="list-search-history">
                            {searchHistory.map((his: string, index: number) => (
                                <li key={index}>
                                    <a
                                        onClick={() => {
                                            router.push(
                                                `/results?q=${encodeURIComponent(
                                                    his
                                                )}`
                                            );
                                        }}
                                        className="text"
                                    >
                                        {his}
                                    </a>
                                    <a
                                        onClick={() => {
                                            removeSearchHandler(his);
                                        }}
                                        className="btn-control"
                                    >
                                        <i className="material-icons md-close"></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : (
                    <section className="p-3">
                        <ul>
                            <li>
                                <a className="btn-control"></a>
                            </li>
                        </ul>
                    </section>
                )}

                <p className="text-center mx-3">
                    <a
                        onClick={() => handleSubmit()}
                        className="btn w-100 btn-light"
                    >
                        Search
                        <i className="material-icons md-arrow_forward"></i>
                    </a>
                </p>
                <br />
            </main>
        </>
    );
}

export default SearchMain;
