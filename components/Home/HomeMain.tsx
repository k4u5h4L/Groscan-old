function HomeMain() {
    return (
        <>
            <main className="app-content">
                <section className="px-3 pb-3 pt-1 bg-primary">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control border-0 shadow-sm"
                    />
                </section>

                <section className="px-3 pb-3 bg-primary scroll-horizontal">
                    <a href="#" className="item-lg card-banner rounded mr-2">
                        <div
                            className="card-body bg-warning"
                            style={{
                                height: "180px",
                                backgroundImage: `url('/images/banners/banner1.jpg')`,
                            }}
                        ></div>
                        <div className="text-bottom">
                            <h5 className="title">Super discount</h5>
                        </div>
                    </a>
                    <a href="#" className="item-lg card-banner rounded mr-2">
                        <div
                            className="card-body bg-warning"
                            style={{
                                height: "180px",
                                backgroundImage: `url('/images/banners/banner2.jpg')`,
                            }}
                        ></div>
                        <div className="text-bottom">
                            <h5 className="title">Get offers</h5>
                        </div>
                    </a>
                    <a href="#" className="item-lg card-banner rounded mr-2">
                        <div
                            className="card-body bg-warning"
                            style={{
                                height: "180px",
                                backgroundImage: `url('/images/banners/banner3.jpg')`,
                            }}
                        ></div>
                        <div className="text-bottom">
                            <h5 className="title">Best deals now</h5>
                        </div>
                    </a>
                </section>

                <section>
                    <h5 className="title-section">New arrival</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/1.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$13.90</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/2.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$90.80</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/3.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/4.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$9.50</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/5.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/6.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/7.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <hr className="divider" data-size="10" />

                <section>
                    <h5 className="title-section">Recommended</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/8.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$13.90</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/7.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$90.80</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/6.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/5.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$9.50</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/4.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/3.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="/images/items/2.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>
                                    {/* <!-- price .// --> */}
                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <hr className="divider" data-size="10" />

                <section>
                    <h5 className="title-section">Categories</h5>

                    <ul className="p-3 list-menu">
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/cpu.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Electronic items</h6>
                                    <span className="text-muted">
                                        234 items
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/homeitem.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Home equipments</h6>
                                    <span className="text-muted">
                                        354 items
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/book.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">
                                        Books and magazines
                                    </h6>
                                    <span className="text-muted">48 items</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/ball.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Sport and outdoor</h6>
                                    <span className="text-muted">97 items</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/shoe-lady.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Shoes for women</h6>
                                    <span className="text-muted">
                                        234 items
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/shirt.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Shirts for men</h6>
                                    <span className="text-muted">
                                        354 items
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/toy.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Toys and kids</h6>
                                    <span className="text-muted">48 items</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category-blue/watch.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Accessories</h6>
                                    <span className="text-muted">97 items</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>

                <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i> More
                        pages
                    </a>
                </p>
                <br />
            </main>
        </>
    );
}

export default HomeMain;
