import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const isAdmin = user?.type === 1;

    const logout = () => {
        if (confirm('Are you sure you want to log out?')) {
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
                                🚑 Save Me
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                Dashboard
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                About
                            </Link>
                            <Link href="/emergencies" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                Emergencies
                            </Link>
                            <Link href="/lessons" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                Lessons
                            </Link>
                            <Link href="/quizzes" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                Quizzes
                            </Link>
                            <Link href="/quiz-results" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                                My Results
                            </Link>

                            <div className="border-r border-gray-300 h-8 mx-2"></div>

                            <span className="text-sm text-gray-600">
                                {user?.name} {isAdmin && <span className="text-red-600 font-bold">(Admin)</span>}
                            </span>

                            <button
                                onClick={logout}
                                className="bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}