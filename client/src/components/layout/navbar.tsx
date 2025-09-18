const Navbar = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-800">My Blog</h1>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Ana Sayfa
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Hakkında
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            İletişim
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Login
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
