import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import { CreatePostSchema } from "../../../schemas/BlogSchema";
import { z } from "zod";

const AddBlogPage: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        excerpt: "",
        content: "",
        tags: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors((prev) => ({
                ...prev,
                [e.target.name]: "",
            }));
        }
    };

    const handleContentChange = (value?: string) => {
        setFormData({
            ...formData,
            content: value || "",
        });

        if (errors.content) {
            setErrors((prev) => ({
                ...prev,
                content: "",
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        try {
            const validatedData = CreatePostSchema.parse(formData);
            console.log("Valid blog data:", validatedData);
            // API call will be here
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                error.issues.forEach((err: z.ZodIssue) => {
                    if (err.path && err.path.length > 0) {
                        fieldErrors[err.path[0] as string] = err.message;
                    }
                });
                setErrors(fieldErrors);
            }
        }
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
                            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                errors.title
                                    ? "border-red-500"
                                    : "border-gray-700"
                            }`}
                            placeholder="Blog yazınızın başlığını giriniz..."
                        />
                        {errors.title && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* Category */}
                    <div className="grid gap-6">
                        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Kategori
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                    errors.category
                                        ? "border-red-500"
                                        : "border-gray-700"
                                }`}
                            >
                                <option value="">Kategori seçiniz</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            {errors.category && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.category}
                                </p>
                            )}
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
                            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none ${
                                errors.excerpt
                                    ? "border-red-500"
                                    : "border-gray-700"
                            }`}
                            placeholder="Blog yazınızın kısa bir özetini yazın..."
                        />
                        {errors.excerpt && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.excerpt}
                            </p>
                        )}
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
                        {errors.content && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.content}
                            </p>
                        )}
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
