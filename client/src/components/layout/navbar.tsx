import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-black shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    {/* Logo - Sol taraf */}
                    <div className="text-xl font-bold text-white hover:text-gray-500">
                        <Link to="/">My Blog</Link>
                    </div>

                    {/* Navigation Links - Sağ taraf */}
                    <div className="flex items-center space-x-6">
                        <Link
                            to="/addBlogPage"
                            className="text-white hover:text-gray-500 transition-colors"
                        >
                            Add Blog
                        </Link>
                        <Link
                            to="/loginPage"
                            className="text-white hover:text-gray-500 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
