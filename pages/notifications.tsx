import ItemsFilters from "@/components/Items/ItemsFilters/ItemsFilters";
import ItemsHeader from "@/components/Items/ItemsHeader/ItemsHeader";
import ItemsMain from "@/components/Items/ItemsMain";
import { useState } from "react";

export default function Notifications() {
    const [items, setItems] = useState([]);
    return (
        <>
            <ItemsHeader title="Notifications" />
            <ItemsMain items={items} setItems={setItems} />
            <ItemsFilters items={items} setItems={setItems} />
        </>
    );
}
