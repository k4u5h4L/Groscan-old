import { useRouter } from "next/router";

function ListingMain() {
    const router = useRouter();
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <main className="app-content">
                <section className="px-3 pt-1 pb-3 bg-primary">
                    <input
                        type="text"
                        onClick={() => router.push("/search")}
                        placeholder="Search"
                        readOnly={true}
                        onChange={() => console.log("Going to search")}
                        className="bg-primary-light border-0 text-white form-control"
                    />
                </section>

                <section>
                    <h5 className="title-section">Recommends</h5>
                    <div className="p-3 scroll-horizontal">
                        {items.map((item, index) => (
                            <div className="item" key={index}>
                                <a href="#" className="product">
                                    <div className="img-wrap">
                                        <img
                                            src={`/images/items/${item}.jpg`}
                                            alt="product"
                                        />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$13.90</div>
                                        <p className="title">Great item name</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section">New arrival</h5>

                    <div className="p-3">
                        <ul className="row">
                            {items.map((item, index) => (
                                <li
                                    className="col-12 col-sm-12 col-md-6"
                                    key={index}
                                >
                                    <article className="product-list mb-2">
                                        <div>
                                            <a href="#" className="img-wrap">
                                                <img
                                                    src={`images/items/${item}.jpg`}
                                                    alt="product"
                                                />
                                            </a>
                                        </div>
                                        <div className="info-wrap">
                                            <p className="title">
                                                Great product name
                                            </p>
                                            <div className="price mb-2">
                                                $23.00
                                            </div>
                                            <div>
                                                <a
                                                    href="#"
                                                    className="btn btn-sm btn-light"
                                                >
                                                    Add to cart
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-icon btn-sm btn-light"
                                                >
                                                    <i className="material-icons md-favorite_border"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i> More
                        pages
                    </a>
                </p> */}
                <br />
            </main>
        </>
    );
}

export default ListingMain;
