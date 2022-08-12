import SearchMain from "@/components/Search/SearchMain";
import { getPref } from "@/utils/preferencesUtils";
import { useEffect, useState } from "react";

export default function Search() {
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    useEffect(() => {
        const getSearchHistory = async () => {
            const searches: string[] = await getPref("searchHistory");

            setSearchHistory(searches);
        };

        getSearchHistory();
    }, []);

    return (
        <>
            <SearchMain history={searchHistory} />
        </>
    );
}
