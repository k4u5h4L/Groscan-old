import Link from "next/link";

function ItemsMain({ items, setItems }) {
    const it = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <main className="app-content">
                <section className="px-3 pt-1 pb-3 bg-primary">
                    <form className="row">
                        <div className="col-6">
                            <select className="form-select form-select-sm bg-primary-light text-white border-0">
                                <option>Sort by</option>
                                <option>Price</option>
                                <option>Name</option>
                                <option>Rating</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <button
                                type="button"
                                data-bs-target="#offcanvas_filter"
                                data-bs-toggle="offcanvas"
                                className="btn w-100 btn-sm btn-primary-light text-start text-white border-0"
                            >
                                Show filter
                            </button>
                        </div>
                    </form>
                </section>

                <section>
                    <div className="p-3">
                        <ul className="row">
                            {it.map((i, index) => (
                                <li
                                    className="col-12 col-sm-12 col-md-6"
                                    key={index}
                                >
                                    <article className="product-list mb-2">
                                        <a href="#" className="img-wrap">
                                            <img
                                                src={`/images/items/${i}.jpg`}
                                            />
                                        </a>
                                        <div className="info-wrap">
                                            <a href="#" className="float-end">
                                                <i className="material-icons md-favorite_border"></i>
                                            </a>

                                            <p className="title">
                                                Great product name
                                            </p>

                                            <div className="rating-wrap">
                                                <ul className="rating-stars">
                                                    <li
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        className="stars-active"
                                                    >
                                                        <img
                                                            src="/images/misc/stars-active.svg"
                                                            height="16"
                                                            alt="stars"
                                                        />
                                                    </li>
                                                    <li>
                                                        <img
                                                            src="/images/misc/stars-disable.svg"
                                                            height="16"
                                                            alt="stars"
                                                        />
                                                    </li>
                                                </ul>
                                                <small className="label-rating text-muted">
                                                    9/10
                                                </small>
                                            </div>

                                            <div className="price">$99.50</div>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <Link href={"/add"}>
                        <a className="btn w-100 btn-light">
                            Add an item
                            <i className="material-icons md-arrow_forward"></i>
                        </a>
                    </Link>
                </p>
                <br />
            </main>
        </>
    );
}

export default ItemsMain;
