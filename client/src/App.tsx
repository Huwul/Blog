import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import BlogPage from "./pages/blogPage";
import LoginPage from "./pages/loginPage";
import AddBlogPage from "./pages/addBlogPage";

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
