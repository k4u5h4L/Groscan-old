function Footer() {
    return (
        <footer className="footer-wrap">
            <ul className="footer">
                <li className="footer-item active">
                    <a href="index.html" className="footer-link">
                        <i className="iconly-Home icli"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li className="footer-item">
                    <a href="category-wide.html" className="footer-link">
                        <i className="iconly-Category icli"></i>
                        <span>Category</span>
                    </a>
                </li>
                <li className="footer-item">
                    <a href="search.html" className="footer-link">
                        <i className="iconly-Search icli"></i>
                        <span>Search</span>
                    </a>
                </li>
                <li className="footer-item">
                    <a href="offer.html" className="footer-link">
                        {/* <lord-icon
                            className="icon"
                            src="/assets/icons/gift.json"
                            trigger="loop"
                            stroke="70"
                            colors="primary:#ffffff,secondary:#ffffff"
                        ></lord-icon> */}
                        <i className="iconly-Bag-2 icli"></i>
                        <span className="offer">Offers</span>
                    </a>
                </li>
                <li className="footer-item">
                    <a href="cart.html" className="footer-link">
                        <i className="iconly-Bag-2 icli"></i>
                        <span>Cart</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
