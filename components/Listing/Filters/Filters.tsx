function Filters() {
    return (
        <>
            <div
                className="offcanvas offcanvas-bottom"
                tabIndex={-1}
                id="offcanvas_filter"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Filter by</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <article className="offcanvas-body">
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        All sizes
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Large size
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Medium size
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Small size
                                    </div>
                                </label>
                            </div>
                            <div className="col">
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Metallic
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Leather
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Plastic
                                    </div>
                                </label>
                                <label className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <div className="form-check-label">
                                        Cotton
                                    </div>
                                </label>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            data-bs-dismiss="offcanvas"
                        >
                            Apply filter
                        </button>
                    </form>
                </article>
            </div>
        </>
    );
}

export default Filters;
