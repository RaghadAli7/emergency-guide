import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const isAdmin = user?.type === 1;

    const cards = [
        {
            title: 'الحالات الطارئة',
            desc: 'عرض وإدارة الحالات المبلغ عنها',
            href: '/emergencies',
            color: 'bg-red-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-600',
            icon: (
                <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
            ),
        },
        {
            title: 'الدروس التعليمية',
            desc: 'تصفح الدروس التعليمية المتاحة',
            href: '/lessons',
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
            icon: (
                <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
            ),
        },
        {
            title: 'الاختبارات',
            desc: 'حل الاختبارات واختبر معرفتك',
            href: '/quizzes',
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-600',
            icon: (
                <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                </svg>
            ),
        },
        {
            title: 'نتائجي',
            desc: 'عرض نتائج الاختبارات السابقة',
            href: '/quiz-results',
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
            icon: (
                <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="لوحة التحكم" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* ترحيب */}
                    <div className="mb-8">
                        <h1 className="mb-2 text-3xl font-bold text-gray-900">
                            مرحباً، {user?.name} 👋
                        </h1>
                        <p className="text-gray-600">
                            {isAdmin
                                ? 'لديك صلاحيات الأدمن - يمكنك إدارة المحتوى بالكامل'
                                : 'مرحباً بك في منصة الإسعافات الأولية'}
                        </p>
                    </div>

                    {/* بطاقات الإجراءات */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {cards.map((card, index) => (
                            <Link
                                key={index}
                                href={card.href}
                                className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="p-6">
                                    {/* الأيقونة */}
                                    <div
                                        className={`${card.bgColor} ${card.textColor} mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110`}
                                    >
                                        {card.icon}
                                    </div>

                                    <h3 className="mb-1 text-lg font-bold text-gray-800">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {card.desc}
                                    </p>
                                </div>

                                <div
                                    className={`${card.bgColor} ${card.textColor} border-t border-gray-100 px-6 py-3 text-sm font-medium`}
                                >
                                    انتقل ←
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* قسم صلاحيات الأدمن */}
                    {isAdmin && (
                        <div className="mt-8 flex items-start rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                                <svg
                                    className="h-6 w-6 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-red-800">
                                    صلاحيات الأدمن
                                </h3>
                                <p className="text-sm text-red-700">
                                    يمكنك إضافة وتعديل وحذف الحالات الطارئة والدروس
                                    والاختبارات من خلال الصفحات المخصصة. تظهر لك أزرار
                                    الإدارة في كل صفحة.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* قسم النصيحة للمستخدم العادي */}
                    {!isAdmin && (
                        <div className="mt-8 flex items-start rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-blue-800">
                                    نصيحة
                                </h3>
                                <p className="text-sm text-blue-700">
                                    ابدأ بحل الاختبارات للحصول على شهادة الإسعافات
                                    الأولية. تحتاج لاجتياز 3 اختبارات بنسبة 60% على
                                    الأقل.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}