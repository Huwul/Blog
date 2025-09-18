import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import BlogPage from "./pages/blogPage";

function App() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <BlogPage />
            <Footer />
        </div>
    );
}

export default App;
