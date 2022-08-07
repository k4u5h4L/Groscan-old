import Link from "next/link";

function Header() {
    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <Link href={"/"}>
                    <h4
                        style={{ cursor: "pointer" }}
                        className="title-header ms-2 text-start"
                    >
                        Shopapp
                    </h4>
                </Link>
                <div className="header-right">
                    <Link href={"/notifications"}>
                        <a className="btn-header">
                            <i className="material-icons md-notifications_active"></i>
                        </a>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
