import Filters from "@/components/Listing/Filters/Filters";
import ListingHeader from "@/components/Listing/ListingHeader/ListingHeader";
import ListingMain from "@/components/Listing/ListingMain";
import Navbar from "@/components/Navbar/Navbar";

export default function Items() {
    return (
        <>
            <ListingHeader title="Groceries" />
            <ListingMain />
            <Filters />
            <Navbar />
        </>
    );
}
