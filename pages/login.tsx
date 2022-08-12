import LoginMain from "@/components/Auth/Login/LoginMain";
import Header from "@/components/Common/Header/Header";
import Sidebar from "@/components/Common/Sidebar/Sidebar";

export default function Login() {
    return (
        <>
            <Header title="Groscan" />
            <LoginMain />
            <Sidebar />
        </>
    );
}
