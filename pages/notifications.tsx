import ItemsFilters from "@/components/Items/ItemsFilters/ItemsFilters";
import ItemsHeader from "@/components/Items/ItemsHeader/ItemsHeader";
import ItemsMain from "@/components/Items/ItemsMain";

export default function Notifications() {
    return (
        <>
            <ItemsHeader title="Notifications" />
            <ItemsMain />
            <ItemsFilters />
        </>
    );
}
