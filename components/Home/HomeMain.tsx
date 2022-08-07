import Link from "next/link";
import Banner from "./Banner/Banner";
import Categories from "./Category/Category";
import ItemList from "./ItemList/ItemList";
import ItemSlider from "./ItemSlider/ItemSlider";

function HomeMain() {
    return (
        <>
            <main className="app-content">
                <Banner />
                <Categories />
                <ItemSlider />

                <hr className="divider" data-size="10" />

                <ItemList />

                <p className="text-center mx-3">
                    <Link href={"/groceries"}>
                        <a className="btn w-100 btn-light">
                            See more items
                            <i className="material-icons md-arrow_forward"></i>
                        </a>
                    </Link>
                </p>
                <br />
            </main>
        </>
    );
}

export default HomeMain;
