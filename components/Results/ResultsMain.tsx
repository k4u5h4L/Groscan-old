import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

function ResultsMain() {
    const router = useRouter();

    const searchQuery = `${router.query.q ?? "None"}`;

    const { data, error } = useSWR(
        `/api/items/search?q=${encodeURIComponent(searchQuery)}`,
        fetcher
    );

    console.log(data);

    if (error) {
        return <>Error</>;
    }

    return (
        <>
            <main className="app-content">
                <section className="p-3 bg-primary">
                    {/* <p className="text-white">Hey, Alisa 👋</p> */}
                    <h3 className="text-white">
                        Showing results for: <br />
                        &quot;{searchQuery}&quot;
                    </h3>

                    <form className="mt-3">
                        <input
                            type="text"
                            placeholder="Search"
                            readOnly={true}
                            onChange={(e) => console.log(e.target.value)}
                            onClick={() => router.push("/search")}
                            className="form-control border-0 text-white bg-primary-light"
                        />
                    </form>
                </section>

                <section>
                    <h5 className="title-section">Recommended</h5>
                    <div className="p-3">
                        <ul className="row">
                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/1.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="price mb-2">$23.00</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/2.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Amazing product heading
                                        </p>
                                        <div className="price mb-2">$99.50</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/3.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="price mb-2">$7.90</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/4.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Amazing item name
                                        </p>
                                        <div className="price mb-2">$13.50</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/5.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Great product goes here
                                        </p>
                                        <div className="price mb-2">$12.00</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/6.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Best product name
                                        </p>
                                        <div className="price mb-2">$23.00</div>
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

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <div>
                                        <a href="#" className="img-wrap">
                                            <img src="/images/items/item.jpg" />
                                        </a>
                                    </div>
                                    <div className="info-wrap">
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="price mb-2">$23.00</div>
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
                        </ul>
                    </div>
                </section>

                <section className="bg-primary">
                    <h5 className="title-section text-white">More category</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/book.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Books{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/shirt.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Clothing{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/shoe-lady.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Women{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/toy.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Kid&apos;s toy{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/cpu.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Computers{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/ball.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    Sports{" "}
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/watch.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    Accessories
                                </small>
                            </a>
                        </div>
                        <div className="item-xs">
                            <a href="#" className="item-category-sm">
                                <div className="icon-wrap bg-primary-light shadow-sm">
                                    <img
                                        className="icon"
                                        src="/images/icons/category-white/more.svg"
                                        alt=""
                                    />
                                </div>
                                <small className="title text-white">
                                    {" "}
                                    More{" "}
                                </small>
                            </a>
                        </div>
                    </div>

                    <p className="text-center mx-3">
                        <a
                            href="index.html"
                            className="btn w-100 btn-primary-light text-white"
                        >
                            <i className="material-icons md-arrow_back"></i> All
                            pages
                        </a>
                    </p>
                    <br />
                </section>
            </main>
        </>
    );
}

export default ResultsMain;
