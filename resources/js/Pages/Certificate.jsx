import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Certificate() {
    const { user, passedCount, date } = usePage().props;

    const printCertificate = () => {
        window.print();
    };

    return (
        <AuthenticatedLayout>
            <Head title="الشهادة" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <div
                        className="rounded-xl border-8 border-double border-blue-800 bg-white p-12 shadow-2xl"
                        id="certificate"
                    >
                        <div className="text-center">
                            <h1 className="mb-2 text-5xl font-bold text-blue-900">
                                شهادة إتمام
                            </h1>
                            <h2 className="mb-8 text-2xl text-gray-600">
                                الإسعافات الأولية
                            </h2>

                            <div className="my-8 border-t-2 border-b-2 border-yellow-500 py-8">
                                <p className="mb-4 text-xl text-gray-700">
                                    تُمنح هذه الشهادة إلى
                                </p>
                                <p className="mb-4 text-4xl font-bold text-blue-900">
                                    {user.name}
                                </p>
                                <p className="text-lg text-gray-700">
                                    لاجتيازه بنجاح{' '}
                                    <strong>{passedCount}</strong> اختبارات في مجال
                                    الإسعافات الأولية
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">التاريخ</p>
                                    <p className="font-bold text-gray-800">{date}</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500">
                                        <span className="text-xl font-bold text-white">
                                            ✓
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">التوقيع</p>
                                    <p className="border-t-2 border-gray-400 pt-1 font-bold text-gray-800">
                                        إدارة النظام
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4 print:hidden">
                        <button
                            onClick={printCertificate}
                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                        >
                            🖨️ طباعة الشهادة
                        </button>
                        <a
                            href="/quiz-results"
                            className="rounded-lg bg-gray-500 px-6 py-3 font-medium text-white hover:bg-gray-600"
                        >
                            العودة للنتائج
                        </a>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}