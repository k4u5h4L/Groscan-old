export default function Loader() {
    return (
        <div className="skeleton-loader">
            <header className="header">
                <div className="logo-wrap">
                    <i className="iconly-Category icli"></i>
                    <a href="index.html">
                        <img
                            className="logo logo-w"
                            src="/assets/images/logo/logo-w.png"
                            alt="logo"
                        />
                    </a>
                    <a href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="avatar-wrap">
                    <span className="font-sm">
                        <i className="iconly-Location icli font-xl"></i> Los
                        Angeles
                    </span>
                    <a href="account.html">
                        <img
                            className="avatar"
                            src="/assets/images/avatar/avatar.jpg"
                            alt="avatar"
                        />
                    </a>
                </div>
            </header>

            <div className="main-wrap index-page mb-xxl">
                <div className="search-box">
                    <input className="form-control" disabled type="search" />
                </div>

                <div className="banner-section section-p-t ratio2_1">
                    <div className="h-banner-slider">
                        <div>
                            <div className="banner-box">
                                <div className="bg-img"></div>
                            </div>
                        </div>
                        <div>
                            <div className="banner-box">
                                <div className="bg-img"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recently section-p-t">
                    <div className="recently-wrap">
                        <h3 className="font-md sk-hed"></h3>
                        <img
                            className="corner"
                            src="/assets/svg/corner-sk.svg"
                            alt="corner"
                        />
                        <ul className="recently-list">
                            <li className="item">
                                <div className="img"></div>
                            </li>
                            <li className="item">
                                <div className="img"></div>
                            </li>
                            <li className="item">
                                <div className="img"></div>
                            </li>
                            <li className="item">
                                <div className="img"></div>
                            </li>
                            <li className="item">
                                <div className="img"></div>
                            </li>
                            <li className="item">
                                <div className="img"></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="category section-p-t">
                    <h3 className="font-sm">
                        <span></span>
                        <span className="line"></span>
                    </h3>
                    <div className="row gy-sm-4 gy-2">
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="category-wrap">
                                <div className="bg-shape"></div>
                                <span className="font-xs title-color"> </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offer-section section-p-t">
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
                            <a
                                href="javascript(0)"
                                className="font-xs font-theme"
                            >
                                See all
                            </a>
                        </div>

                        <div className="offer-wrap">
                            <div className="product-list media">
                                <a href="javascript(0)">
                                    <img
                                        src="/assets/images/product/8.png"
                                        alt="offer"
                                    />
                                </a>
                                <div className="media-body">
                                    <a href="javascript(0)" className="font-sm">
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
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="0"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </div>
                                </div>
                            </div>

                            <div className="product-list media">
                                <a href="javascript(0)">
                                    <img
                                        src="/assets/images/product/6.png"
                                        alt="offer"
                                    />
                                </a>
                                <div className="media-body">
                                    <a href="javascript(0)" className="font-sm">
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
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="0"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </div>
                                </div>
                            </div>

                            <div className="product-list media">
                                <a href="javascript(0)">
                                    <img
                                        src="/assets/images/product/7.png"
                                        alt="offer"
                                    />
                                </a>
                                <div className="media-body">
                                    <a href="javascript(0)" className="font-sm">
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
                                        <i
                                            className="sub"
                                            data-feather="minus"
                                        ></i>
                                        <input
                                            type="number"
                                            value="1"
                                            onChange={(e) => console.log(e)}
                                            min="0"
                                            max="10"
                                        />
                                        <i
                                            className="add"
                                            data-feather="plus"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
