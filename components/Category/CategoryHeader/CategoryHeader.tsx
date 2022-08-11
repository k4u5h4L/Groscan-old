import { useRouter } from "next/router";

function CategoryHeader() {
    const router = useRouter();

    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <a onClick={() => router.back()} className="btn-header">
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <h5 className="title-header">Categories</h5>

                <a href="#" className="btn-header">
                    <i className="material-icons md-notifications"></i>
                </a>
            </header>
        </>
    );
}

export default CategoryHeader;
