interface PostCardProps {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    categoryColor: string;
}

const PostCard = ({ title, date, category, excerpt }: PostCardProps) => {
    return (
        <article className="bg-gray-900 rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white">{date}</span>
                <span className={` bg-gray-400 text-xs px-2 py-1 rounded`}>
                    {category}
                </span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
            <p className="text-gray-400 mb-4">{excerpt}</p>
            <a
                href="#"
                className="text-blue-400 hover:text-blue-600 font-medium"
            >
                Devamını Oku →
            </a>
        </article>
    );
};

export default PostCard;
