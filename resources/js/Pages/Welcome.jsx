import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const isLoggedIn = auth?.user;

    return (
        <>
            <Head title="Save Me - First Aid Platform" />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl">🚑</span>
                                <h1 className="text-2xl font-bold text-blue-600">Save Me</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                                    About
                                </Link>
                                {isLoggedIn ? (
                                    <Link
                                        href="/dashboard"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login" className="text-gray-700 hover:text-blue-600">
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                                    Be the First Responder in Emergencies
                                </h2>
                                <p className="mb-8 text-lg text-gray-600">
                                    "Save Me" is your comprehensive guide to learning first aid
                                    and how to act correctly in emergency situations. Help yourself
                                    and those around you in critical moments.
                                </p>
                                <div className="flex gap-4">
                                    {isLoggedIn ? (
                                        <Link
                                            href="/dashboard"
                                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                        >
                                            Get Started
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href="/register"
                                                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                            >
                                                Start for Free
                                            </Link>
                                            <Link
                                                href="/login"
                                                className="rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
                                            >
                                                Login
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/images/1.png"
                                    alt="First Aid"
                                    className="max-w-full rounded-xl shadow-2xl"
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h3 className="mb-4 text-3xl font-bold text-gray-900">
                                What Do We Offer?
                            </h3>
                            <p className="text-lg text-gray-600">
                                Everything you need to learn first aid in one place
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="rounded-xl bg-gradient-to-br from-red-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">🚨</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    Emergency Cases
                                </h4>
                                <p className="text-gray-600">
                                    Learn how to handle different emergency situations
                                    (burns, bleeding, fractures, and more)
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">📚</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    Educational Lessons
                                </h4>
                                <p className="text-gray-600">
                                    Comprehensive lessons with videos and illustrations to
                                    learn first aid step by step
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">📝</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    Interactive Quizzes
                                </h4>
                                <p className="text-gray-600">
                                    Test your knowledge through interactive quizzes and earn
                                    a certified completion certificate
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-blue-600 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                            <div>
                                <div className="mb-2 text-5xl font-bold text-white">
                                    +13
                                </div>
                                <p className="text-blue-100">Emergency Cases</p>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-bold text-white">
                                    +25
                                </div>
                                <p className="text-blue-100">Educational Lessons</p>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-bold text-white">
                                    +10
                                </div>
                                <p className="text-blue-100">Interactive Quizzes</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h3 className="mb-6 text-3xl font-bold text-gray-900">
                            Are You Ready to Save a Life?
                        </h3>
                        <p className="mb-8 text-lg text-gray-600">
                            Join us now and start your journey in learning first aid
                        </p>
                        {!isLoggedIn && (
                            <Link
                                href="/register"
                                className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
                            >
                                Register Now for Free
                            </Link>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-8 text-center text-gray-400">
                    <p>© 2026 Save Me Platform - All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}