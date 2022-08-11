import Header from "@/components/Common/Header/Header";
import Sidebar from "@/components/Common/Sidebar/Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

function OtpError() {
    const router = useRouter();

    const errorMessage = `${router.query.error}`;

    return (
        <>
            <Header />
            <main className="app-content">
                <hr className="divider" />

                <section className="bg">
                    <h5 className="title-section">
                        Uh oh... An error has occured
                    </h5>
                    <div className="p-3">
                        <article className="card shadow-sm mb-3">
                            <div className="card-body">
                                {errorMessage
                                    ? errorMessage
                                    : "Something went wrong with verifying your OTP. Please try logging in again."}
                            </div>
                        </article>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <Link href={"/login"}>
                        <a className="btn w-100 btn-light">
                            <i className="material-icons md-refresh"></i> Try
                            again
                        </a>
                    </Link>
                </p>
            </main>
            <Sidebar />
        </>
    );
}

export default OtpError;
