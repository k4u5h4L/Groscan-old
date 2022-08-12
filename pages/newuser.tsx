import NewUserMain from "@/components/Auth/NewUser/NewuserMain";
import Header from "@/components/Common/Header/Header";
import Sidebar from "@/components/Common/Sidebar/Sidebar";

export default function NewUser() {
    return (
        <>
            <Header title="Groscan" />
            <NewUserMain />
            <Sidebar />
        </>
    );
}
