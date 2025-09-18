import PostCard from "../components/blog/PostCard";

const BlogPage: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: "İlk Blog Yazım",
            date: "18 Eylül 2025",
            category: "Teknoloji",
            categoryColor: "bg-blue-100 text-blue-800",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            id: 2,
            title: "Web Geliştirme Deneyimlerim",
            date: "15 Eylül 2025",
            category: "Yaşam",
            categoryColor: "bg-green-100 text-green-800",
            excerpt:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
        },
    ];

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 mb-8">
                Welcome to my blog! Here you'll find my latest posts.
            </p>

            {/* Blog Posts Container */}
            <div className="space-y-6">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        date={post.date}
                        category={post.category}
                        categoryColor={post.categoryColor}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Daha Fazla Yükle
                </button>
            </div>
        </main>
    );
};

export default BlogPage;
