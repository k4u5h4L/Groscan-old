import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function NewUserMain() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [image, setImage] = useState(null);

    const usernameRef = useRef<any>();
    const phoneRef = useRef<any>();

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
            })
        );

        const res = await fetch(`/api/user/new`, {
            method: "POST",
            cache: "no-cache",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: body,
        });

        const data = await res.json();

        console.log(data);

        router.push("/");
    };

    return (
        <>
            <main className="app-content">
                <div className="pb-1 pt-3 bg-primary">
                    <h3 className="title-lg text-white">
                        Enter your account details
                    </h3>
                </div>

                <section className="py-3 px-4">
                    <form onSubmit={(e) => submitHandler(e)}>
                        <div className="icontext">
                            <div className="icon">
                                <img
                                    src={"/images/user-profile.svg"}
                                    className="avatar-lg"
                                    alt=""
                                    width={80}
                                    height={80}
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
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="Username"
                                required={true}
                                ref={usernameRef}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control bg-light"
                                placeholder="Phone"
                                required={true}
                                ref={phoneRef}
                                pattern="^[+][0-9]{12}"
                            />
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">
                                Create password
                            </label>
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Repeat password
                            </label>
                            <input
                                type="password"
                                className="form-control bg-light"
                                placeholder="Password"
                            />
                        </div> */}
                        {/* <div className="mb-3">
                            <label className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                />
                                <div className="form-check-label">
                                    I agree with terms
                                </div>
                            </label>
                        </div> */}
                        <button
                            className="btn btn-primary w-100"
                            type="submit"
                            onClick={(e) => submitHandler(e)}
                        >
                            Start using the app!
                        </button>
                    </form>

                    <p className="text-center p-3">
                        These details will be related to your account will be
                        used for the functionality of the app and will never be
                        sold to any third parties.
                    </p>
                </section>
            </main>
        </>
    );
}

export default NewUserMain;
