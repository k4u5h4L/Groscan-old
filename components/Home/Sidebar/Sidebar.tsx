export default function Sidebar() {
    return (
        <>
            <a
                href="#"
                className="overlay-sidebar"
                onClick={(e) => e.preventDefault()}
            ></a>
            <aside className="header-sidebar">
                <div className="wrap">
                    <div className="user-panel">
                        <div className="media">
                            <a href="account.html">
                                <img
                                    src="/assets/images/avatar/avatar.jpg"
                                    alt="avatar"
                                />
                            </a>
                            <div className="media-body">
                                <a
                                    href="account.html"
                                    className="title-color font-sm"
                                >
                                    Andrea Joanne
                                    <span className="content-color font-xs">
                                        andreajoanne@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <nav className="navigation">
                        <ul>
                            <li>
                                <a
                                    href="index.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Home icli"></i>
                                    <span>Home</span>
                                </a>
                                <a className="arrow" href="index.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="pages-list.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Paper icli"></i>
                                    <span>Fastkart Pages list</span>
                                </a>
                                <a className="arrow" href="pages-list.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="category-wide.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Category icli"></i>
                                    <span>Shop by Category</span>
                                </a>
                                <a className="arrow" href="category-wide.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="order-history.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Document icli"></i>
                                    <span>Orders</span>
                                </a>
                                <a className="arrow" href="order-history.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="wishlist.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Heart icli"></i>
                                    <span>Your Wishlist</span>
                                </a>
                                <a className="arrow" href="wishlist.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#language"
                                    aria-controls="language"
                                    className="nav-link title-color font-sm"
                                >
                                    <img
                                        src="/assets/icons/png/flags.png"
                                        alt="flag"
                                    />
                                    <span>Langauge</span>
                                </a>
                                <a
                                    className="arrow"
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="account.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Add-User icli"></i>
                                    <span>Your Account</span>
                                </a>
                                <a className="arrow" href="account.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="notification.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Notification icli"></i>
                                    <span>Notification</span>
                                </a>
                                <a className="arrow" href="notification.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="setting.html"
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Setting icli"></i>
                                    <span>Settings</span>
                                </a>
                                <a className="arrow" href="setting.html">
                                    <i data-feather="chevron-right"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Graph icli"></i>
                                    <span>Dark</span>
                                </a>

                                <div className="dark-switch">
                                    <input id="darkButton" type="checkbox" />
                                    <span></span>
                                </div>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="nav-link title-color font-sm"
                                >
                                    <i className="iconly-Filter icli"></i>
                                    <span>RTL</span>
                                </a>

                                <div className="dark-switch">
                                    <input id="rtlButton" type="checkbox" />
                                    <span className="before-none"></span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="contact-us">
                    <span className="title-color">Contact Support</span>
                    <p className="content-color font-xs">
                        If you have any problem,queries or questions feel free
                        to reach out
                    </p>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="btn-solid"
                    >
                        {" "}
                        Contact Us{" "}
                    </a>
                </div>
            </aside>
        </>
    );
}
