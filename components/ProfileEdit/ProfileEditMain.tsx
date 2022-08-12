import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ProfileEditMain() {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        <>
            <main className="app-content">
                <section className="p-3">
                    <form name="profile_form" id="profile_form">
                        <div className="icontext">
                            <div className="icon">
                                <img
                                    src={
                                        session?.user?.image ??
                                        "/images/user-profile.svg"
                                    }
                                    className="avatar-lg"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <label
                                    htmlFor="formFile"
                                    className="form-label"
                                >
                                    Change image
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                        </div>

                        <hr />

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                placeholder={session?.user?.name ?? "username"}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="tel"
                                name="telefon"
                                className="form-control"
                                pattern="^[+][0-9]{12}"
                                placeholder={"phone"}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                autoFocus
                                autoComplete="on"
                                className="form-control"
                                placeholder={session?.user?.email ?? "email"}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                list="city"
                                name="city"
                                className="form-control"
                                placeholder="Type"
                            />
                            <datalist id="city">
                                <option value="Moscow"></option>
                                <option value="Tokyo"></option>
                                <option value="Samarqand"></option>
                            </datalist>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-light w-100">
                                Change password
                            </button>
                        </div>
                    </form>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        form="profile_form"
                    >
                        Save
                    </button>

                    <br />
                </section>

                <p className="text-center my-3">
                    <a onClick={() => router.back()} className="btn btn-light">
                        <i className="material-icons md-arrow_back"></i> Cancel
                        & go back
                    </a>
                </p>
            </main>
        </>
    );
}

export default ProfileEditMain;
