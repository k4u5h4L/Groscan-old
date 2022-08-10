import { useRouter } from "next/router";

function DetailHeader() {
    const router = useRouter();

    return (
        <>
            <header className="p-2 absolute-top">
                <a
                    href="index.html"
                    onClick={() => router.back()}
                    className="btn btn-icon"
                >
                    <i className="material-icons md-arrow_back"></i>
                </a>
            </header>
        </>
    );
}

export default DetailHeader;
