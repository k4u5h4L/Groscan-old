import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

function NewUserMain() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            console.log(event.target.value);

            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                console.log("reader result", reader.result);

                setCreateObjectURL(URL.createObjectURL(i));
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

        console.log("image", image);

        const body = new FormData();
        // console.log("file", image)
        body.append("file", image);
        // const response = await fetch("/api/upload", {
        //     method: "POST",
        //     body,
        // });

        console.log(body);

        const res = await fetch(`/api/user/new`, {
            method: "POST",
            // mode: "cors",
            // cache: "no-cache",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // redirect: "follow",
            // referrerPolicy: "no-referrer",
            body: body,
        });

        const data = await res.json();

        console.log(data);

        // router.push("/");
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
                                    src="/images/avatars/1.jpg"
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
                        <div className="mb-3">
                            <label className="form-label">Your username</label>
                            <input
                                type="text"
                                className="form-control bg-light"
                                placeholder="Username"
                                required={true}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="number"
                                className="form-control bg-light"
                                placeholder="Phone"
                                required={true}
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
