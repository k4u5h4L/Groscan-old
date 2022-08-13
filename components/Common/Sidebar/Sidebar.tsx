import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Sidebar() {
    const { data: session, status } = useSession();

    return (
        <>
            <aside
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvas_left_123"
            >
                <header className="p-3 border-bottom bg-light">
                    <button
                        type="button"
                        className="float-end btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>

                    <Link href={"/profile"}>
                        <a className="icontext">
                            <img
                                src={
                                    session?.user?.image ??
                                    "/images/user-profile.svg"
                                }
                                className="icon avatar-sm"
                                alt=""
                                width={44}
                                height={44}
                            />
                            <div className="text">
                                <h6 className="mb-0">
                                    Hi, {session?.user?.name ?? "User"} 👋
                                </h6>
                                <small>My profile</small>
                            </div>
                        </a>
                    </Link>
                </header>
                <article className="offcanvas-body">
                    <nav className="nav-sidebar mt-2">
                        <Link href={"/login"}>
                            <a>
                                <i className="material-icons md-log_in"></i>{" "}
                                Login
                            </a>
                        </Link>
                        <Link href={"/scan"}>
                            <a>
                                <i className="material-icons md-camera"></i>{" "}
                                Scan an item
                            </a>
                        </Link>
                        <Link href={"/notifications"}>
                            <a>
                                <i className="material-icons md-notifications"></i>{" "}
                                Notifications
                            </a>
                        </Link>
                        {/* <hr />
                        <a href="#">
                            <i className="material-icons md-info"></i> About us
                        </a>
                        <a href="#">
                            <i className="material-icons md-chat"></i> Help
                            &amp; support
                        </a>
                        <a href="#">
                            <i className="material-icons md-local_police"></i>{" "}
                            Services
                        </a> */}
                        <hr />
                        <Link href={"/profile"}>
                            <a>
                                <i className="material-icons md-account_circle"></i>{" "}
                                Profile
                            </a>
                        </Link>
                        <Link href={"/settings"}>
                            <a>
                                <i className="material-icons md-settings"></i>{" "}
                                Settings
                            </a>
                        </Link>
                        <a onClick={() => signOut()}>
                            <i className="material-icons md-log_out"></i> Logout
                        </a>
                    </nav>
                </article>
            </aside>
        </>
    );
}

export default Sidebar;
