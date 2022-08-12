import { useSession } from "next-auth/react";

function ProfileMain() {
    const { data: session, status } = useSession();

    return (
        <>
            <main className="app-content">
                <section className="p-3 bg-primary">
                    <a href="28.page-settings.html" className="float-end">
                        <i className="material-icons md-edit text-white"></i>
                    </a>
                    <figure
                        className="icontext align-items-center mr-4"
                        style={{ maxWidth: "300px" }}
                    >
                        <img
                            className="icon icon-md rounded-circle"
                            src="/images/avatars/1.jpg"
                            alt=""
                        />
                        <figcaption className="text text-white">
                            <p className="h5 title mb-1">
                                {session.user.name ?? "Username"}
                            </p>
                            <p className="text-white-50 lh-sm">
                                {session.user.email ?? "Email"}
                            </p>
                        </figcaption>
                    </figure>
                </section>

                <section className="p-3">
                    <ul className="row">
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <i className="icon material-icons md-shopping_basket"></i>
                                </span>
                                <small className="text"> Orders </small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <i className="icon material-icons md-favorite"></i>
                                </span>
                                <small className="text"> Wishlist</small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <i className="icon material-icons md-account_balance_wallet"></i>
                                </span>
                                <small className="text"> Payment </small>
                            </a>
                        </li>
                    </ul>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section pb-2">Orders</h5>
                    <nav className="nav-list">
                        <a className="btn-list" href="#">
                            <span className="float-end badge bg-warning">
                                3
                            </span>
                            <span className="text">On proccess</span>
                        </a>
                        <a className="btn-list" href="#">
                            <span className="float-end badge bg-success">
                                1
                            </span>
                            <span className="text">Shipped</span>
                        </a>
                        <a className="btn-list" href="#">
                            <span className="float-end badge bg-secondary">
                                0
                            </span>
                            <small className="title"></small>
                            <span className="text">Unpaid</span>
                        </a>
                    </nav>
                </section>
                <hr className="divider" />
                <section>
                    <h5 className="title-section pb-2">Account</h5>

                    <nav className="nav-list">
                        <a className="btn-list" href="#">
                            <i className="icon-control material-icons md-keyboard_arrow_right"></i>
                            <span className="text">Settings</span>
                        </a>
                        <a className="btn-list" href="#">
                            <i className="icon-control material-icons md-keyboard_arrow_right"></i>
                            <span className="text">Support</span>
                        </a>
                        <div className="btn-list">
                            <div className="float-end form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="check_notify1"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="check_notify1"
                                ></label>
                            </div>
                            <span className="text">Notifications</span>
                        </div>
                    </nav>
                </section>

                <hr className="divider" />
                <section>
                    <h5 className="title-section pb-2">Personal</h5>
                    <nav className="nav-list">
                        <a
                            className="btn-list"
                            href="29.page-profile-edit.html"
                        >
                            <i className="icon-control material-icons md-edit"></i>
                            <small className="title">Username</small>
                            <span className="text">@vosidiy</span>
                        </a>
                        <a
                            className="btn-list"
                            href="29.page-profile-edit.html"
                        >
                            <i className="icon-control material-icons md-edit"></i>
                            <small className="title">Email</small>
                            <span className="text">myname@gmail.com</span>
                        </a>
                    </nav>
                </section>

                <p className="text-center my-3">
                    <a href="index.html" className="btn btn-light">
                        <i className="material-icons md-arrow_back"></i> Back to
                        all pages
                    </a>
                </p>
            </main>
        </>
    );
}

export default ProfileMain;
