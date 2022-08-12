import Header from "@/components/Common/Header/Header";
import HomeMain from "@/components/Home/HomeMain";
import Sidebar from "@/components/Common/Sidebar/Sidebar";

export default function Home() {
    return (
        <>
            <Header title="Groscan" />
            <HomeMain />
            <Sidebar />
        </>
    );
}
