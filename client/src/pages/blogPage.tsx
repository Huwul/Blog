import PostCard from "../components/blog/PostCard";

const BlogPage: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: "İlk Blog Yazım",
            date: "18 Eylül 2025",
            category: "Teknoloji",
            categoryColor: "bg-blue-100 text-blue-800",
            excerpt: "Merhaba...",
        },
        {
            id: 2,
            title: "Web Geliştirme Deneyimlerim",
            date: "15 Eylül 2025",
            category: "Yaşam",
            categoryColor: "bg-green-100 text-green-800",
            excerpt:
                "Web geliştirme dünyasında edindiğim tecrübeleri paylaşıyorum...",
        },
    ];

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
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
