import { useRouter } from "next/router";

type PropTypes = {
    title: string;
};

function ListingHeader({ title }: PropTypes) {
    const router = useRouter();

    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <a
                    className="btn-header"
                    onClick={() => {
                        router.back();
                    }}
                >
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <h5 className="title-header">{title}</h5>

                <a
                    href="#offcanvas_filter"
                    data-bs-toggle="offcanvas"
                    className="btn-header"
                >
                    <i className="material-icons md-sort"></i>
                </a>
            </header>
        </>
    );
}

export default ListingHeader;
