import ItemsHeader from "@/components/Items/ItemsHeader/ItemsHeader";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <ItemsHeader title="Not Found!" />

            <main className="app-content">
                <section className="p-3">
                    <div className="text-center">
                        <img
                            src="/images/banners/404.png"
                            alt="Not found"
                            className="rounded"
                            width={300}
                            height={160}
                        />
                    </div>
                </section>

                <hr className="divider" />

                <section className="bg">
                    <h4 className="title-section text-center">Oops...</h4>
                    <div className="p-3">
                        <article className="card shadow-sm mb-3">
                            <div className="card-body">
                                The information you&apos;re looking for is not
                                found. Can you check if you have clicked on the
                                right link?
                                <hr />
                                If this does not work please try to
                                update/restart the app.
                            </div>
                        </article>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <Link href={"/"}>
                        <a className="btn w-100 btn-light">
                            <i className="material-icons md-arrow_back"></i>
                            Go to Home
                        </a>
                    </Link>
                </p>
                <br />
            </main>
        </>
    );
}
