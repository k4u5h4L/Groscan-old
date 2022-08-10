import { fetcher } from "@/utils/fetcher";
import useSwr from "swr";

type PropType = {
    itemId: string;
};

function DetailMain({ itemId }: PropType) {
    const { data, error } = useSwr(`/api/items/${itemId}`, fetcher);

    console.log("Fetched data: ", data);

    return (
        <>
            <main className="app-content">
                <section className="bg-light p-3 text-center">
                    <img
                        src="/images/items/book1.jpg"
                        style={{ maxWidth: "220px" }}
                        alt="main-image"
                    />
                </section>

                <section className="padding-around">
                    <div className="mb-3 text-center">
                        <h6>Great Adventures of Robinzon</h6>
                        <p className="text-muted">By Tomas Edison</p>

                        <a href="#" className="btn btn-light">
                            Read sample
                        </a>
                        <a href="#" className="btn btn-light btn-icon">
                            <i className="material-icons md-favorite_border"></i>
                        </a>
                    </div>

                    <div className="mb-2">
                        <p>
                            Great words is just sounds same as lorem ipsum dolor
                            sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            <a href="#"> Read more</a>
                        </p>
                    </div>

                    <div className="row mb-3 lh-sm">
                        <div className="col">
                            <small className="text-muted">Category</small>{" "}
                            <br />
                            Business
                        </div>
                        <div className="col">
                            <small className="text-muted">Language</small>{" "}
                            <br />
                            English
                        </div>
                        <div className="col">
                            <small className="text-muted">Pages</small> <br />
                            322
                        </div>
                        <div className="col">
                            <small className="text-muted">Year</small> <br />
                            2018
                        </div>
                    </div>

                    <a
                        href="#"
                        className="d-flex mb-3 align-items-center border rounded p-2"
                    >
                        <div className="rating-wrap">
                            <ul className="rating-stars">
                                <li
                                    style={{ width: "80%" }}
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
                            <span className="label-rating text-muted">
                                9/10
                            </span>
                        </div>
                        <span className="ms-auto">
                            59 comment
                            <i className="material-icons md-chevron_right"></i>
                        </span>
                    </a>

                    <figure className="icontext w-100">
                        <div className="icon">
                            <img
                                src="/images/avatars/1.jpg"
                                className="avatar-sm"
                                alt=""
                            />
                        </div>
                        <figcaption className="text">
                            <span className="text-muted">Author</span>
                            <h6 className="fw-normal">Eckhart Tolle</h6>
                        </figcaption>
                        <span className="ms-auto">
                            <i className="text-muted material-icons md-chevron_right"></i>
                        </span>
                    </figure>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section">Similar books</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book2.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">The lifeboat</p>
                                    <div className="price">$13.90</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book3.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">True love</p>
                                    <div className="price">$90.80</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book4.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">Great item name</p>
                                    <div className="price">$63.00</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book1.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">Great book name</p>
                                    <div className="price">$9.50</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book2.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">Great magazine</p>
                                    <div className="price">$63.00</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book3.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">Product name</p>
                                    <div className="price">$63.00</div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product-book">
                                <div className="img-wrap">
                                    <img src="/images/items/book.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <p className="title">Great item name</p>
                                    <div className="price">$63.00</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section">Reviews (2)</h5>
                    <div className="p-3">
                        <article>
                            <div className="icontext mb-2">
                                <span className="icon">
                                    <img
                                        src="/images/avatars/1.jpg"
                                        className="avatar-sm"
                                        alt=""
                                    />
                                </span>
                                <div>
                                    <p>
                                        Michael John
                                        <span className="text-muted">
                                            - Purchased
                                        </span>
                                    </p>
                                    <span className="text-warning">Good!</span>
                                </div>
                            </div>
                            <p className="text-muted">
                                Good! Tello Edu drone is an ideal companion for
                                anyone engaged Lorem ipsum dolor sit amet <br />
                                <a href="#" className="text-link">
                                    {" "}
                                    Read comment
                                </a>
                            </p>
                        </article>
                        <hr />
                        <article>
                            <div className="icontext mb-2">
                                <span className="icon">
                                    <img
                                        src="/images/avatars/2.jpg"
                                        className="avatar-sm"
                                        alt=""
                                    />
                                </span>
                                <div>
                                    <p>
                                        Alexandra K.
                                        <span className="text-muted">
                                            - Purchased
                                        </span>
                                    </p>
                                    <span className="text-warning">Best!</span>
                                </div>
                            </div>
                            <p className="text-muted">
                                I liked this Tello Edu drone is an ideal
                                companion for anyone engaged Lorem ipsum dolor
                                sit amet <br />
                                <a href="#" className="text-link">
                                    {" "}
                                    Read comment
                                </a>
                            </p>
                        </article>
                    </div>
                </section>
            </main>

            {/* <nav className="bar-bottom">
                <div className="price-wrap me-auto">
                    <span className="price h6">Total: $129.95</span> <br />
                    <small className="text-muted">$32.00 / 1 qty</small>
                </div>
                <div className="ms-2">
                    <select className="form-select">
                        <option value="">1 qty</option>
                        <option value="">2 qty</option>
                        <option value="">3 qty</option>
                    </select>
                </div>
                <div className="ms-2">
                    <a href="#" className="btn w-100 btn-primary">
                        Buy this
                    </a>
                </div>
            </nav> */}
        </>
    );
}

export default DetailMain;
