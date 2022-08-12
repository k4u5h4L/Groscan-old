import Link from "next/link";

function ResultsHeader() {
    return (
        <>
            <header className="app-header ondark bg-primary">
                <a
                    href="#offcanvas_left_123"
                    data-bs-toggle="offcanvas"
                    role="button"
                    className="btn-header"
                >
                    <i className="material-icons md-menu"></i>
                </a>

                <Link href={"/search"}>
                    <a className="btn-header">
                        <i className="material-icons md-search"></i>
                    </a>
                </Link>
            </header>
        </>
    );
}

export default ResultsHeader;
