import { signIn, signOut, useSession } from "next-auth/react";
import { useRef } from "react";

function VerifyMain() {
    const otpRef = useRef<any>();
    const { data: session, status } = useSession();

    if (status == "loading") {
        return <></>;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const otp: string = otpRef.current.value;

        console.log(`Logging in email: ${otp}`);
    };

    return (
        <>
            <main className="app-content">
                <div className="pb-1 pt-3 bg-primary">
                    <h3 className="title-lg text-white">
                        {!session ? "Verify OTP" : "Sign out"}
                    </h3>
                </div>

                <section className="p-3">
                    <form className="m-3" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-2">
                            {!session ? (
                                <label className="form-label">
                                    An OTP is sent to your email. Please check
                                    and enter the same below.
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
                                    type="number"
                                    className="form-control bg-light"
                                    placeholder="Enter your email"
                                    ref={otpRef}
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
                                Submit OTP
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
                        The OTP expires in 10 minutes from the time of sending.
                        If you have not received it, check your spam folder or
                        try relogging in.
                    </p>
                </section>
            </main>
        </>
    );
}

export default VerifyMain;
