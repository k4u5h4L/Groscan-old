import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function ProfileEditMain() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [image, setImage] = useState(null);

    const usernameRef = useRef<any>();
    const phoneRef = useRef<any>();
    const emailRef = useRef<any>();

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            console.log(event.target.value);

            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                setImage(
                    new File(
                        [reader.result],
                        `${session.user.email.replace(/[@.]/g, "-")}.jpg`,
                        {
                            type: "application/jpeg",
                        }
                    )
                );
            };
        }
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();

        const body = new FormData();
        body.append("file", image);

        body.append(
            "fields",
            JSON.stringify({
                username: usernameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
                imageUrl: session.user.image,
                oldUsername: session.user.name,
                oldEmail: session.user.email,
            })
        );

        const res = await fetch(`/api/user/update`, {
            method: "POST",
            cache: "no-cache",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: body,
        });

        const data = await res.json();

        console.log(data);

        router.push("/profile");
    };

    return (
        <>
            <main className="app-content">
                <section className="p-3">
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        name="profile_form"
                        id="profile_form"
                    >
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
                                    name="myImage"
                                    onChange={uploadToClient}
                                    accept=".jpg, .jpeg, .png"
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
                                ref={usernameRef}
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
                                required={true}
                                ref={phoneRef}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                autoFocus
                                autoComplete="on"
                                className="form-control"
                                ref={emailRef}
                                placeholder={session?.user?.email ?? "email"}
                            />
                        </div>

                        {/* <div className="mb-3">
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
                        </div> */}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            form="profile_form"
                            onClick={(e) => submitHandler(e)}
                        >
                            Save
                        </button>
                    </form>

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
