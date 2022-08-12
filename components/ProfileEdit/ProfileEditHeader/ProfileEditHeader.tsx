import Link from "next/link";
import { useRouter } from "next/router";

function ProfileEditHeader() {
    const router = useRouter();
    return (
        <>
            <header className="app-header ondark bg-primary fixed-top">
                <a onClick={() => router.back()} className="btn-header">
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <h5 className="title-header">Settings</h5>

                <div className="header-right">
                    <Link href={"/search"}>
                        <a className="btn-header">
                            <i className="material-icons md-search"></i>
                        </a>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default ProfileEditHeader;
