import PostCard from "../components/cards/PostCard";
import { PostSchema, type Post } from "../../../../schemas/BlogSchema";

const BlogPage: React.FC = () => {
    const postsData = [
        {
            id: 1,
            title: "İlk Blog Yazım",
            date: "18 Eylül 2025",
            category: "Yaşam",
            excerpt: "Merhaba...",
        },
        {
            id: 2,
            title: "Web Geliştirme Deneyimlerim",
            date: "15 Eylül 2025",
            category: "Teknoloji",
            excerpt:
                "Web geliştirme dünyasında edindiğim tecrübeleri paylaşıyorum...",
        },
    ];

    
    const posts: Post[] = postsData.map((post) => PostSchema.parse(post));

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
                        excerpt={post.excerpt}
                    />
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                    Daha Fazla Yükle
                </button>
            </div>
        </main>
    );
};

export default BlogPage;
