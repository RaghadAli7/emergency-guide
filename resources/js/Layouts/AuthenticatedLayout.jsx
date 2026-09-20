import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const isAdmin = user?.type === 1;

    const logout = () => {
        if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
            router.post('/logout');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                                🚑 أنقذني
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4 space-x-reverse">
                            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                لوحة التحكم
                            </Link>
                            <Link href="/emergencies" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                الحالات
                            </Link>
                            <Link href="/lessons" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                الدروس
                            </Link>
                            <Link href="/quizzes" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                الاختبارات
                            </Link>
                            <Link href="/quiz-results" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                نتائجي
                            </Link>

                            <div className="border-r border-gray-300 h-8 mx-2"></div>

                            <span className="text-sm text-gray-600">
                                {user?.name} {isAdmin && <span className="text-red-600 font-bold">(أدمن)</span>}
                            </span>

                            <button
                                onClick={logout}
                                className="bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600"
                            >
                                خروج
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}