import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import Loader from "@/components/Home/Loader/Loader";
import Main from "@/components/Home/Main";
import Sidebar from "@/components/Home/Sidebar/Sidebar";
import Language from "@/components/Language";

export default function Home() {
    return (
        <>
            <Loader />
            <Header />
            <Sidebar />
            <Main />
            <Footer />
            <Language />

            {/* <div
                className="offcanvas offcanvas-bottom addtohome-popup show"
                tabIndex={-1}
                id="offcanvas"
            >
                <div className="offcanvas-body small">
                    <div className="app-info">
                        <img
                            src="/assets/images/logo/logo48.png"
                            className="img-fluid"
                            alt=""
                        />
                        <div className="content">
                            <h3>
                                Fastkart App
                                <i
                                    data-feather="x"
                                    data-bs-dismiss="offcanvas"
                                ></i>
                            </h3>
                            <a href="#">www.fastkart-app.com</a>
                        </div>
                    </div>
                    <button className="btn-solid install-app" id="installApp">
                        Add to home screen
                    </button>
                </div>
            </div> */}
        </>
    );
}
