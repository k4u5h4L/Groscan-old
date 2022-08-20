import ItemsFilters from "@/components/Items/ItemsFilters/ItemsFilters";
import ItemsHeader from "@/components/Items/ItemsHeader/ItemsHeader";
import ItemsMain from "@/components/Items/ItemsMain";
import { fetcher } from "@/utils/fetcher";
import { Grocery } from "@prisma/client";
import { useEffect, useState } from "react";

const STATUS = "UPCOMING";

export default function Active() {
    const [items, setItems] = useState<Grocery[]>([]);

    useEffect(() => {
        const fetchActiveItems = async () => {
            setItems(await fetcher(`/api/items/status?status=${STATUS}`));
        };

        fetchActiveItems();
    }, []);

    return (
        <>
            <ItemsHeader title="Active Items" />
            <ItemsMain items={items} setItems={setItems} />
            <ItemsFilters items={items} setItems={setItems} />
        </>
    );
}
