import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function About() {
    const { auth } = usePage().props;
    const isLoggedIn = auth?.user;

    return (
        <>
            <Head title="من نحن - أنقذني" />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="text-3xl">🚑</span>
                                <h1 className="text-2xl font-bold text-blue-600">أنقذني</h1>
                            </Link>
                            <div className="flex items-center gap-4">
                                <Link href="/" className="text-gray-700 hover:text-blue-600">
                                    الرئيسية
                                </Link>
                                {isLoggedIn ? (
                                    <Link
                                        href="/dashboard"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                    >
                                        لوحة التحكم
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login" className="text-gray-700 hover:text-blue-600">
                                            تسجيل الدخول
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                        >
                                            إنشاء حساب
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            من نحن؟
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            نحن منصة "أنقذني"، منصة تعليمية تهدف إلى نشر الوعي بأهمية
                            الإسعافات الأولية وتزويد الأفراد بالمعرفة والمهارات اللازمة
                            للتصرف الصحيح في حالات الطوارئ.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                                    رسالتنا
                                </h3>
                                <p className="mb-6 text-lg text-gray-600">
                                    نؤمن بأن كل شخص يمكنه أن يكون منقذاً. لذلك نهدف إلى:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">
                                            تعليم الإسعافات الأولية بطريقة بسيطة وواضحة.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">
                                            توفير محتوى تعليمي شامل باللغة العربية.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">
                                            اختبارات تفاعلية لقياس مستوى المعرفة.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">
                                            شهادات إتمام لتشجيع التعلم المستمر.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <div className="text-center">
                                    <div className="mb-4 text-9xl">🩺</div>
                                    <div className="text-6xl">🚑</div>
                                </div>
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
                                <p className="text-blue-100">حالة طارئة</p>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-bold text-white">
                                    +25
                                </div>
                                <p className="text-blue-100">درس تعليمي</p>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-bold text-white">
                                    +10
                                </div>
                                <p className="text-blue-100">اختبار تفاعلي</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h3 className="mb-4 text-3xl font-bold text-gray-900">
                                فريق العمل
                            </h3>
                            <p className="text-lg text-gray-600">
                                الفريق الذي يعمل على تطوير هذه المنصة
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white p-8 text-center shadow-md">
                                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
                                    R
                                </div>
                                <h4 className="mb-2 text-xl font-bold text-gray-900">
                                    رغد علي
                                </h4>
                                <p className="mb-4 text-gray-600">
                                    Full Stack Developer
                                </p>
                                <div className="flex justify-center gap-3">
                                    <a
                                        href="https://github.com/RaghadAli7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900"
                                        title="GitHub"
                                    >
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:raghad77aliali@gmail.com"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
                                        title="Email"
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h3 className="mb-6 text-3xl font-bold text-gray-900">
                            هل أنت مستعد لإنقاذ حياة؟
                        </h3>
                        <p className="mb-8 text-lg text-gray-600">
                            انضم إلينا الآن وابدأ رحلتك في تعلم الإسعافات الأولية
                        </p>
                        {!isLoggedIn ? (
                            <Link
                                href="/register"
                                className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
                            >
                                سجّل الآن مجاناً
                            </Link>
                        ) : (
                            <Link
                                href="/dashboard"
                                className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
                            >
                                اذهب إلى لوحة التحكم
                            </Link>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-8 text-center text-gray-400">
                    <p>© 2026 منصة أنقذني - جميع الحقوق محفوظة</p>
                </footer>
            </div>
        </>
    );
}