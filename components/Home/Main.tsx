function Main() {
    console.log("MAIN component");
    return (
        <main className="main-wrap index-page mb-xxl">
            {/* <!-- Search Box Start --> */}
            <div className="search-box">
                <i className="iconly-Search icli search"></i>
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search here..."
                    onClick={() => console.log("go to search page")}
                />
                <i className="iconly-Voice icli mic"></i>
            </div>
            {/* <!-- Search Box End --> */}

            {/* <!-- Banner Section Start --> */}
            <section className="banner-section ratio2_1">
                <div className="h-banner-slider">
                    <div>
                        <div className="banner-box">
                            <img
                                src="/assets/images/banner/home1.jpg"
                                alt="banner"
                                className="bg-img"
                                width={272}
                                height={184}
                            />
                            <div className="content-box">
                                <h1 className="title-color font-md heading">
                                    Farm Fresh Veggies
                                </h1>
                                <p className="content-color font-sm">
                                    Get instant delivery
                                </p>
                                <a
                                    href="shop.html"
                                    className="btn-solid font-sm"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="banner-box">
                            <img
                                src="/assets/images/banner/home2.jpg"
                                alt="banner"
                                className="bg-img"
                                width={272}
                                height={184}
                            />
                            <div className="content-box">
                                <h2 className="font-white font-md heading">
                                    Farm Fresh Veggies
                                </h2>
                                <p className="font-white font-sm">
                                    Get instant delivery
                                </p>
                                <a
                                    href="shop.html"
                                    className="btn-outline font-sm"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Banner Section End --> */}

            {/* <!-- Buy from Recently Bought Start --> */}
            <section className="recently pt-0">
                <div className="recently-wrap">
                    <h3 className="font-md">Buy from Recently Bought</h3>
                    <img
                        className="corner"
                        src="/assets/svg/corner.svg"
                        alt="corner"
                    />

                    <div className="recently-list-slider recently-list">
                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/2.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/3.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/1.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/6.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/7.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/2.png"
                                        alt="product"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Buy from Recently Bought End --> */}

            {/* <!-- Shop By Category Start --> */}
            <section className="category pt-0">
                <h3 className="font-md">
                    <span>Shop By Category </span>
                    <span className="line"></span>
                </h3>
                <div className="row gy-sm-4 gy-2">
                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-blue border-blue"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/1.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">
                                Oils,Refined & Ghee
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-yellow border-yellow"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/2.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">
                                Rice, Flour & Grains
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-orange border-orange"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/3.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">Food Cupboard </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-pink border-pink"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/4.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">
                                Fresh Fruits & Veggies
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-purple border-purple"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/5.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">
                                Drinks& Beverages
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-blue border-blue"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/6.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">Instant Mixes </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-yellow border-yellow"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/7.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">
                                Ready to Eat Food
                            </span>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="category-wrap">
                            <div className="bg-shape bg-theme-orange border-orange"></div>
                            <a href="shop.html">
                                <img
                                    className="category img-fluid"
                                    src="/assets/images/catagoeris/8.png"
                                    alt="category"
                                />
                            </a>
                            <span className="title-color">Dales & Pulses </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shop By Category End --> */}

            {/* <!-- Say hello to Offers! Start --> */}
            <section className="offer-section pt-0">
                <div className="offer">
                    <div className="top-content">
                        <div>
                            <h4 className="title-color">
                                Say hello to Offers!
                            </h4>
                            <p className="content-color">
                                Best price ever of all the time
                            </p>
                        </div>
                        <a href="offer.html" className="font-theme">
                            See all
                        </a>
                    </div>

                    <div className="offer-wrap">
                        <div className="product-list media">
                            <a href="product.html">
                                <img
                                    src="/assets/images/product/8.png"
                                    className="img-fluid"
                                    alt="offer"
                                />
                            </a>
                            <div className="media-body">
                                <a href="product.html" className="font-sm">
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm">
                                    $25.00
                                    <span className="badges-round bg-theme-theme font-xs">
                                        50% off
                                    </span>
                                </span>
                                <div className="plus-minus d-xs-none">
                                    <i className="sub" data-feather="minus"></i>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={(e) => console.log(e)}
                                        min="0"
                                        max="10"
                                    />
                                    <i className="add" data-feather="plus"></i>
                                </div>
                            </div>
                        </div>

                        <div className="product-list media">
                            <a href="product.html">
                                <img
                                    src="/assets/images/product/6.png"
                                    className="img-fluid"
                                    alt="offer"
                                />
                            </a>
                            <div className="media-body">
                                <a href="product.html" className="font-sm">
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm">
                                    $25.00
                                    <span className="badges-round bg-theme-theme font-xs">
                                        50% off
                                    </span>
                                </span>
                                <div className="plus-minus d-xs-none">
                                    <i className="sub" data-feather="minus"></i>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={(e) => console.log(e)}
                                        min="0"
                                        max="10"
                                    />
                                    <i className="add" data-feather="plus"></i>
                                </div>
                            </div>
                        </div>

                        <div className="product-list media">
                            <a href="product.html">
                                <img
                                    src="/assets/images/product/7.png"
                                    className="img-fluid"
                                    alt="offer"
                                />
                            </a>
                            <div className="media-body">
                                <a href="product.html" className="font-sm">
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm">
                                    $25.00
                                    <span className="badges-round bg-theme-theme font-xs">
                                        50% off
                                    </span>
                                </span>
                                <div className="plus-minus d-xs-none">
                                    <i className="sub" data-feather="minus"></i>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={(e) => console.log(e)}
                                        min="0"
                                        max="10"
                                    />
                                    <i className="add" data-feather="plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Say hello to Offers! End --> */}

            {/* <!-- Lowest Price Start --> */}
            <section className="low-price-section pt-0">
                <div className="top-content">
                    <div>
                        <h4 className="title-color">Lowest Price</h4>
                        <p className="content-color">Pay less, Get More</p>
                    </div>
                    <a href="shop.html" className="font-theme">
                        See all
                    </a>
                </div>

                <div className="product-slider">
                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/10.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $08.99
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/11.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $40.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/11.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $20.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/12.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $21.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/13.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $17.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/9.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $30.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Lowest Price End --> */}

            {/* <!-- Everyday Essentials Start --> */}
            <section className="low-price-section pt-0">
                <div className="top-content">
                    <div>
                        <h4 className="title-color">Everyday Essentials</h4>
                        <p className="content-color">
                            Best price ever of all the time
                        </p>
                    </div>
                    <a href="shop.html" className="font-theme">
                        See all
                    </a>
                </div>

                <div className="product-slider">
                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/13.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $32.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/14.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $11.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/11.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $25.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/12.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $09.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/13.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $25.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/12.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $16.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Everyday Essentials End --> */}

            {/* <!-- Coupons For You Start --> */}
            <section className="coupons-section pt-0">
                <div className="coupon-wrap">
                    <div className="top-content">
                        <div>
                            <h4 className="title-color">Coupens For You</h4>
                            <p className="content-color">
                                Popular Offers of the Day
                            </p>
                        </div>
                        <a href="offer.html" className="font-theme">
                            See all
                        </a>
                    </div>

                    <div className="coupon-box coupon-slider">
                        <div>
                            <a href="offer.html">
                                <div className="cupon bg-theme-orange">
                                    <span className="circle-shape-wrap left">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <span className="circle-shape-wrap right">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <div className="img-wrap">
                                        <img
                                            src="/assets/icons/png/google2.png"
                                            alt="google pay"
                                        />
                                    </div>
                                    <div className="content-wrap">
                                        <h5 className="title-color">50% OFF</h5>
                                        <span className="content-color">
                                            UPTO $20.00
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="offer.html">
                                <div className="cupon bg-white">
                                    <span className="circle-shape-wrap left">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <span className="circle-shape-wrap right">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <div className="img-wrap">
                                        <img
                                            src="/assets/icons/png/paypal.png"
                                            alt="google pay"
                                        />
                                    </div>
                                    <div className="content-wrap">
                                        <h5 className="title-color">50% OFF</h5>
                                        <span className="content-color">
                                            UPTO $20.00
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="offer.html">
                                <div className="cupon bg-theme-yellow">
                                    <span className="circle-shape-wrap left">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <span className="circle-shape-wrap right">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <div className="img-wrap">
                                        <img
                                            src="/assets/icons/png/venmo.png"
                                            alt="google pay"
                                        />
                                    </div>
                                    <div className="content-wrap">
                                        <h5 className="title-color">50% OFF</h5>
                                        <span className="content-color">
                                            UPTO $20.00
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="offer.html">
                                <div className="cupon bg-theme-orange">
                                    <span className="circle-shape-wrap left">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <span className="circle-shape-wrap right">
                                        <span className="circle-shape"></span>
                                    </span>
                                    <div className="img-wrap">
                                        <img
                                            src="/assets/icons/png/google2.png"
                                            alt="google pay"
                                        />
                                    </div>
                                    <div className="content-wrap">
                                        <h5 className="title-color">50% OFF</h5>
                                        <span className="content-color">
                                            UPTO $20.00
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Coupens For You End --> */}

            {/* <!-- Lowest Price 2 Start --> */}
            <section className="low-price-section pt-0">
                <div className="top-content">
                    <div>
                        <h4 className="title-color">Lowest Price</h4>
                        <p className="content-color">Pay less, Get More</p>
                    </div>
                    <a href="shop.html" className="font-theme">
                        See all
                    </a>
                </div>

                <div className="product-slider">
                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/10.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $22.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/11.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $17.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/11.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $14.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/12.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $15.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/13.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $23.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="product-card">
                            <div className="img-wrap">
                                <a href="product.html">
                                    <img
                                        src="/assets/images/product/9.png"
                                        className="img-fluid"
                                        alt="product"
                                    />
                                </a>
                            </div>
                            <div className="content-wrap">
                                <a
                                    href="product.html"
                                    className="font-sm title-color"
                                >
                                    Assorted Capsicum Combo
                                </a>
                                <span className="content-color font-xs">
                                    500g
                                </span>
                                <span className="title-color font-sm plus-item">
                                    $22.00
                                    <span className="plus-minus">
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            className="val"
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="1"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </span>
                                    <span className="plus-theme">
                                        <i data-feather="plus"></i>{" "}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Lowest Price 2 End --> */}

            {/* <!-- Question section Start --> */}
            <section className="question-section pt-0">
                <h5>Didn&apos;t find what you were looking for?</h5>
                <a href="category-wide.html" className="btn-solid">
                    Browse Category
                </a>
            </section>
            {/* <!-- Question section End --> */}
        </main>
    );
}

export default Main;
