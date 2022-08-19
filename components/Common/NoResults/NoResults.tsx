import Link from "next/link";

type PropType = {
    imageSrc: string;
    desc: string;
    backLink: string;
    backText: string;
};

function NoResults({ imageSrc, desc, backLink, backText }: PropType) {
    return (
        <>
            <main className="app-content">
                <section className="p-3">
                    <div className="text-center">
                        <img
                            src={imageSrc}
                            alt="No results"
                            className="rounded"
                            width={300}
                            height={160}
                        />
                    </div>
                    {/* </section>

                <section className="bg"> */}
                    <h4 className="title-section text-center">Uh huh...</h4>
                    <div className="p-3">
                        <article className="card shadow-sm mb-3">
                            <div className="card-body">
                                {desc ?? "No results were found"}
                            </div>
                        </article>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <Link href={backLink}>
                        <a className="btn w-100 btn-light">
                            <i className="material-icons md-arrow_back"></i>
                            {backText}
                        </a>
                    </Link>
                </p>
                <br />
            </main>
        </>
    );
}

export default NoResults;
