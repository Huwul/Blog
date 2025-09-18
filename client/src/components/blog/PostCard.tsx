interface PostCardProps {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    categoryColor: string;
}

const PostCard = ({
    title,
    date,
    category,
    excerpt,
    categoryColor,
}: PostCardProps) => {
    return (
        <article className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{date}</span>
                <span className={`${categoryColor} text-xs px-2 py-1 rounded`}>
                    {category}
                </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {title}
            </h2>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                Devamını Oku →
            </a>
        </article>
    );
};

export default PostCard;
