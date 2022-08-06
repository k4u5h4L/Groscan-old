function Language() {
    return (
        <div
            className="action action-language offcanvas offcanvas-bottom"
            tabIndex={-1}
            id="language"
            aria-labelledby="language"
        >
            <div className="offcanvas-body small">
                <h2 className="m-b-title1 font-md">Select Language</h2>

                <ul className="list">
                    <li>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <img src="/assets/icons/flag/us.svg" alt="us" />
                            English
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <img src="/assets/icons/flag/in.svg" alt="us" />
                            Indian
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <img src="/assets/icons/flag/it.svg" alt="us" />
                            Italian
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <img src="/assets/icons/flag/tf.svg" alt="us" />
                            French
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <img src="/assets/icons/flag/cn.svg" alt="us" />
                            Chines
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Language;
