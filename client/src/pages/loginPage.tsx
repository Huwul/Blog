import { useState } from "react";
import {
    LoginSchema,
    RegisterSchema,
} from "../../../schemas/Login_RegisterSchema";
import { z } from "zod";

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        try {
            if (isLogin) {
                const validatedData = LoginSchema.parse({
                    email: formData.email,
                    password: formData.password,
                });
                console.log("Login data:", validatedData);
                // Handle login
            } else {
                const validatedData = RegisterSchema.parse({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                });
                console.log("Register data:", validatedData);
                // Handle registration
            }
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

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                {/* Logo/Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        My Blog
                    </h1>
                    <p className="text-gray-400">
                        {isLogin
                            ? "Hesabınıza giriş yapın"
                            : "Yeni hesap oluşturun"}
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-800">
                    {/* Toggle Buttons */}
                    <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                isLogin
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Giriş Yap
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                !isLogin
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Kayıt Ol
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name field for signup */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                        errors.name
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                    placeholder="Ad Soyad giriniz"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                E-posta
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-700"
                                }`}
                                placeholder="E-posta adresinizi giriniz"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Şifre
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-700"
                                }`}
                                placeholder="Şifrenizi giriniz"
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password for signup */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Şifre Tekrar
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all ${
                                        errors.confirmPassword
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                    placeholder="Şifrenizi tekrar giriniz"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Forgot Password for login */}
                        {isLogin && (
                            <div className="text-right">
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Şifremi unuttum
                                </a>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-6"
                        >
                            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
