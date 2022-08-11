import DetailHeader from "@/components/Detail/DetailHeader/DetailHeader";
import DetailMain from "@/components/Detail/DetailMain";
import { useRouter } from "next/router";

function Item() {
    const router = useRouter();

    const itemId: string = `${router.query.id}`;

    return (
        <>
            <DetailHeader />
            <DetailMain itemId={itemId} />
        </>
    );
}

export default Item;
