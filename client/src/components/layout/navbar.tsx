const Navbar = () => {
    return (
        <header className="bg-black shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white hover:text-gray-500">
                        <a href="/">My Blog</a>
                    </h1>
                    <div className="flex space-x-4 text-white hover:text-gray-500">
                        <a
                            href="/loginPage"
                
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
