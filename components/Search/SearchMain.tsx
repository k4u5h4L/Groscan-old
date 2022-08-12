import { forceLower } from "@/utils/commonUtils";
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
    const [focus, setFocus] = useState<boolean>(true);

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

        if (searchHistory.includes(searchString.toLowerCase())) {
            setSearchHistory((prev) => {
                prev.push(searchString.toLowerCase());
                return prev;
            });

            await setPref("searchHistory", searchHistory);
        }

        router.push(`/results?q=${encodeURIComponent(searchString)}`);
    };

    const onFocusHandler = () => {
        setFocus(true);
    };

    const onBlurHandler = () => {
        setFocus(false);
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
                            style={{ color: focus ? "black" : "white" }}
                            ref={searchRef}
                            onFocus={onFocusHandler}
                            onBlur={onBlurHandler}
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
                    <section className="p-3"></section>
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
