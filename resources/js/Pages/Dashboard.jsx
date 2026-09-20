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
            icon: '🚑',
        },
        {
            title: 'الدروس التعليمية',
            desc: 'تصفح الدروس التعليمية المتاحة',
            href: '/lessons',
            color: 'bg-green-500',
            icon: '📚',
        },
        {
            title: 'الاختبارات',
            desc: 'حل الاختبارات واختبر معرفتك',
            href: '/quizzes',
            color: 'bg-purple-500',
            icon: '📝',
        },
        {
            title: 'نتائجي',
            desc: 'عرض نتائج الاختبارات السابقة',
            href: '/quiz-results',
            color: 'bg-orange-500',
            icon: '📊',
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="لوحة التحكم" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* ترحيب */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
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
                                className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="p-6">
                                    <div
                                        className={`${card.color} mb-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white`}
                                    >
                                        {card.icon}
                                    </div>
                                    <h3 className="mb-1 text-lg font-bold text-gray-800">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{card.desc}</p>
                                </div>
                                <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 text-sm font-medium text-blue-600 group-hover:text-blue-800">
                                    انتقل →
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* قسم صلاحيات الأدمن */}
                    {isAdmin && (
                        <div className="mt-8 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
                            <div className="flex items-start">
                                <div className="ml-3 flex-1">
                                    <h3 className="mb-2 text-lg font-bold text-red-800">
                                        🛡️ صلاحيات الأدمن
                                    </h3>
                                    <p className="text-sm text-red-700">
                                        يمكنك إضافة وتعديل وحذف الحالات الطارئة والدروس والاختبارات من
                                        خلال الصفحات المخصصة. تظهر لك أزرار الإدارة في كل صفحة.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* قسم الإحصائيات السريعة (للمستخدم العادي) */}
                    {!isAdmin && (
                        <div className="mt-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                            <div className="flex items-start">
                                <div className="ml-3 flex-1">
                                    <h3 className="mb-2 text-lg font-bold text-blue-800">
                                        💡 نصيحة
                                    </h3>
                                    <p className="text-sm text-blue-700">
                                        ابدأ بحل الاختبارات للحصول على شهادة الإسعافات الأولية. تحتاج
                                        لاجتياز 3 اختبارات بنسبة 60% على الأقل.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}