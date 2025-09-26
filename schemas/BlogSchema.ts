import { z } from "zod";

export const PostSchema = z.object({
    id: z.number(),
    title: z.string().min(1, "Başlık boş olamaz"),
    date: z.string(),
    category: z.string().min(1, "Kategori boş olamaz"),
    excerpt: z.string().min(1, "Özet boş olamaz"),
});

export const CreatePostSchema = z.object({
    title: z.string().min(1, "Başlık boş olamaz").max(200, "Başlık çok uzun"),
    category: z.string().min(1, "Kategori seçmelisiniz"),
    excerpt: z
        .string()
        .min(10, "Özet en az 10 karakter olmalıdır")
        .max(500, "Özet çok uzun"),
    content: z.string().min(50, "İçerik en az 50 karakter olmalıdır"),
    tags: z.string().optional(),
});

export type Post = z.infer<typeof PostSchema>;
export type CreatePostData = z.infer<typeof CreatePostSchema>;
