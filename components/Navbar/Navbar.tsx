import Link from "next/link";

function Navbar() {
    return (
        <>
            <nav className="nav-bottom">
                <Link href={"/"}>
                    <a className="nav-link active">
                        <i className="icon material-icons md-home"></i>
                        <span className="text">Home</span>
                    </a>
                </Link>
                <Link href={"/categories"}>
                    <a className="nav-link">
                        <i className="icon material-icons md-apps"></i>
                        <span className="text">Category</span>
                    </a>
                </Link>
                <Link href={"/active"}>
                    <a className="nav-link">
                        <i className="icon material-icons md-shopping_cart"></i>
                        <span className="text">Active Items</span>
                    </a>
                </Link>
                <Link href={"/profile"}>
                    <a className="nav-link">
                        <i className="icon material-icons md-account_circle"></i>
                        <span className="text">Profile</span>
                    </a>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
