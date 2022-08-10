import LoginMain from "@/components/Auth/Login/LoginMain";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Login() {
    return (
        <>
            <Header />
            <LoginMain />
            <Navbar />
            <Sidebar />
        </>
    );
}
