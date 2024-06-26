import Link from "next/link";

type PropType = {
    title: string;
};

function Header({ title = "Groscan" }: PropType) {
    return (
        <>
            <header
                className="app-header ondark bg-primary"
                id="header-component"
            >
                <a
                    href="#offcanvas_left_123"
                    data-bs-toggle="offcanvas"
                    role="button"
                    className="btn-header"
                >
                    <i className="material-icons md-menu"></i>
                </a>

                <Link href={"/"}>
                    <h5 style={{ cursor: "pointer" }} className="title-header">
                        {title}
                    </h5>
                </Link>
                <Link href={"/search"}>
                    <a className="btn-header">
                        <i className="material-icons md-search"></i>
                    </a>
                </Link>
            </header>
        </>
    );
}

export default Header;
