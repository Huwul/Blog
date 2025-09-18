import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";

const AddBlogPage: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        tags: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleContentChange = (value?: string) => {
        setFormData({
            ...formData,
            content: value || "",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Blog saved:", formData);
        // API call will be here
    };

    const categories = [
        "Teknoloji",
        "Yaşam",
        "Seyahat",
        "Yemek",
        "Spor",
        "Sanat",
        "Müzik",
        "Film",
    ];

    return (
        <div className="min-h-screen bg-black py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Yeni Blog Yazısı
                    </h1>
                    <p className="text-gray-400">Düşüncelerinizi paylaşın</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Başlık
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                            placeholder="Blog yazınızın başlığını giriniz..."
                            required
                        />
                    </div>

                    {/* Category and Tags */}
                    <div className="grid gap-6">
                        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Kategori
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                                required
                            >
                                <option value="">Kategori seçiniz</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Kısa Açıklama
                        </label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                            placeholder="Blog yazınızın kısa bir özetini yazın..."
                            required
                        />
                    </div>

                    {/* Markdown Editor */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                        <label className="block text-sm font-medium text-gray-300 mb-4">
                            İçerik
                        </label>
                        <div data-color-mode="dark">
                            <MDEditor
                                value={formData.content}
                                onChange={handleContentChange}
                                height={400}
                                preview="edit"
                                hideToolbar={false}
                                data-color-mode="dark"
                                style={{
                                    backgroundColor: "transparent",
                                }}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-6">
                        <button
                            type="button"
                            className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
                        >
                            Taslak Olarak Kaydet
                        </button>

                        <button
                            type="submit"
                            className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Yayınla
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogPage;
