export default function Header() {
    return (
        <header className="header">
            <div className="logo-wrap">
                <i className="iconly-Category icli nav-bar"></i>
                <a href="index.html">
                    <img
                        className="logo logo-w"
                        src="/assets/images/logo/logo-w.png"
                        alt="logo"
                    />
                </a>
                <a href="index.html">
                    <img
                        className="logo"
                        src="/assets/images/logo/logo.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className="avatar-wrap">
                <span className="font-sm">
                    <i className="iconly-Location icli font-xl"></i> Los Angeles
                </span>
                <a href="account.html">
                    <img
                        className="avatar"
                        src="/assets/images/avatar/avatar.jpg"
                        alt="avatar"
                    />
                </a>
            </div>
        </header>
    );
}
