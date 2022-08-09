import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef } from "react";

function LoginMain() {
    const emailRef = useRef<any>();
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status == "loading") {
        return <></>;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const email: string = emailRef.current.value;

        console.log(`Logging in email: ${email}`);

        signIn("email", {
            email: email,
            callbackUrl: `/verify`,
            redirect: false,
        });

        router.push(`/verify?email=${encodeURIComponent(email)}`);
    };

    return (
        <>
            <main className="app-content">
                <div className="pb-1 pt-3 bg-primary">
                    <h3 className="title-lg text-white">
                        {!session ? "Sign in with OTP" : "Sign out"}
                    </h3>
                </div>

                <section className="p-3">
                    <form className="m-3" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-2">
                            {!session ? (
                                <label className="form-label">
                                    An OTP will be sent to your email. If
                                    you&apos;re new here, an account will be
                                    created for you after you verify your email.
                                </label>
                            ) : (
                                <label className="form-label">
                                    Not <b>{session.user.email}</b>? Then sign
                                    out and sign in again!
                                </label>
                            )}

                            <hr />

                            {!session ? (
                                <input
                                    type="email"
                                    className="form-control bg-light"
                                    placeholder="Enter your email"
                                    ref={emailRef}
                                    required={true}
                                />
                            ) : null}
                        </div>
                        {!session ? (
                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                Send OTP
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary w-100"
                                type="button"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
                        )}
                    </form>

                    <p className="text-center p-3">
                        {/* Don&apos;t have account <a href="#">Register</a> */}
                        You need to have access to our email account to log in.
                    </p>
                </section>
            </main>
        </>
    );
}

export default LoginMain;
