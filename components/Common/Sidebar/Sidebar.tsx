import {
    scheduleNotification,
    schedulePeriodicNotification,
    sendNotification,
} from "@/utils/notificationUtils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

function Sidebar() {
    // useEffect(() => {
    //     const currentDate = new Date();

    //     if (typeof window != "undefined") {
    //         LocalNotifications.schedule({
    //             notifications: [
    //                 {
    //                     id: 1,
    //                     title: "Test schedule",
    //                     body: "Test body",
    //                     schedule: {
    //                         at: new Date(currentDate.getTime() + 2 * 60 * 100),
    //                     },
    //                 },
    //             ],
    //         });
    //     }
    // }, []);

    const { data: session, status } = useSession();

    useEffect(() => {
        console.log("Sidebar mounted");

        return () => {
            if (typeof window != "undefined") {
                document.body.setAttribute("style", "");
                document.body.removeAttribute("data-bs-padding-right");
            }
        };
    }, []);

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
                        <button
                            onClick={() =>
                                sendNotification(1, "Test title", "Test body")
                            }
                        >
                            Send Notif
                        </button>
                        <button
                            onClick={() => {
                                const currentDate = new Date();

                                scheduleNotification(
                                    2,
                                    "Test schedule",
                                    "Test body",
                                    new Date(
                                        currentDate.getTime() + 2 * 60 * 100
                                    )
                                );
                            }}
                        >
                            Schedule Notif
                        </button>
                        <button
                            onClick={() =>
                                schedulePeriodicNotification(
                                    3,
                                    "Test Periodic schedule",
                                    "Test body",
                                    0,
                                    2,
                                    0
                                )
                            }
                        >
                            Schedule Periodic Notif
                        </button>
                    </nav>
                </article>
            </aside>
        </>
    );
}

export default Sidebar;
