import Link from "next/link";
import { useRouter } from "next/router";

type PropType = {
    title: string;
};

function ItemsHeader({ title }: PropType) {
    const router = useRouter();

    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <a onClick={() => router.back()} className="btn-header">
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <h5 className="title-header">{title}</h5>

                <Link href={"/search"}>
                    <a className="btn-header">
                        <i className="material-icons md-search"></i>
                    </a>
                </Link>
            </header>
        </>
    );
}

export default ItemsHeader;
