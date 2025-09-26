import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import AddBlogPage from "./pages/AddBlogPage";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-black min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<BlogPage />} />
                    <Route path="/loginPage" element={<LoginPage />} />
                    <Route path="/addBlogPage" element={<AddBlogPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
