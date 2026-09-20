import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const isLoggedIn = auth?.user;

    return (
        <>
            <Head title="أنقذني - منصة الإسعافات الأولية" />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl">🚑</span>
                                <h1 className="text-2xl font-bold text-blue-600">أنقذني</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                {isLoggedIn ? (
                                    <Link
                                        href="/dashboard"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                    >
                                        لوحة التحكم
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            className="text-gray-700 hover:text-blue-600"
                                        >
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
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                                    كن المنقذ الأول في حالات الطوارئ
                                </h2>
                                <p className="mb-8 text-lg text-gray-600">
                                    منصة "أنقذني" هي دليلك الشامل لتعلم الإسعافات الأولية
                                    والتصرف الصحيح في الحالات الطارئة. ساعد نفسك ومن حولك
                                    في اللحظات الحرجة.
                                </p>
                                <div className="flex gap-4">
                                    {isLoggedIn ? (
                                        <Link
                                            href="/dashboard"
                                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                        >
                                            ابدأ الآن
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href="/register"
                                                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                            >
                                                ابدأ مجاناً
                                            </Link>
                                            <Link
                                                href="/login"
                                                className="rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
                                            >
                                                تسجيل الدخول
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center">
    <img
        src="/images/1.png"
        alt="الإسعافات الأولية"
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
                                ماذا نقدم لك؟
                            </h3>
                            <p className="text-lg text-gray-600">
                                كل ما تحتاجه لتعلم الإسعافات الأولية في مكان واحد
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="rounded-xl bg-gradient-to-br from-red-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">🚨</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    حالات الطوارئ
                                </h4>
                                <p className="text-gray-600">
                                    تعرف على كيفية التعامل مع الحالات الطارئة المختلفة
                                    (حروق، نزيف، كسور، وغيرها)
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">📚</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    دروس تعليمية
                                </h4>
                                <p className="text-gray-600">
                                    دروس شاملة مع فيديوهات وصور توضيحية لتعلم الإسعافات
                                    الأولية خطوة بخطوة
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-md transition hover:shadow-lg">
                                <div className="mb-4 text-5xl">📝</div>
                                <h4 className="mb-3 text-xl font-bold text-gray-900">
                                    اختبارات تفاعلية
                                </h4>
                                <p className="text-gray-600">
                                    اختبر معرفتك من خلال اختبارات تفاعلية واحصل على شهادة
                                    إتمام معتمدة
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

                {/* CTA Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                        <h3 className="mb-6 text-3xl font-bold text-gray-900">
                            هل أنت مستعد لإنقاذ حياة؟
                        </h3>
                        <p className="mb-8 text-lg text-gray-600">
                            انضم إلينا الآن وابدأ رحلتك في تعلم الإسعافات الأولية
                        </p>
                        {!isLoggedIn && (
                            <Link
                                href="/register"
                                className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
                            >
                                سجّل الآن مجاناً
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