import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

export const RegisterSchema = z
    .object({
        name: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
        email: z.string().email("Geçerli bir e-posta adresi giriniz"),
        password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Şifreler eşleşmiyor",
        path: ["confirmPassword"],
    });

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
