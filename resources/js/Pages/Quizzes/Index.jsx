import React from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index() {
    const { quizzes = [], auth } = usePage().props;
    const isAdmin = auth?.user?.type === 1;

    const handleDelete = async (id) => {
        if (confirm('هل أنت متأكد من حذف هذا الاختبار؟')) {
            try {
                await axios.delete(`/api/quizzes/${id}`);
                window.location.href = '/quizzes';
            } catch (error) {
                console.error(error);
                alert('حدث خطأ أثناء الحذف');
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="الاختبارات" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            الاختبارات
                        </h1>
                        {isAdmin && (
                            <button
                                onClick={() =>
                                    (window.location.href = '/quizzes/create')
                                }
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                إضافة اختبار جديد
                            </button>
                        )}
                    </div>

                    {Array.isArray(quizzes) && quizzes.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {quizzes.map((quiz) => (
                                <div
                                    key={quiz.id}
                                    className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
                                >
                                    <h5 className="mb-2 text-lg font-semibold text-gray-800">
                                        {quiz.title}
                                    </h5>
                                    <p className="mb-2 text-gray-600">
                                        {quiz.description}
                                    </p>
                                    <p className="mb-4 text-sm text-gray-500">
                                        عدد الأسئلة: {quiz.questions?.length || 0}
                                    </p>

                                    <button
                                        onClick={() =>
                                            (window.location.href = `/quizzes/${quiz.id}/take`)
                                        }
                                        className="mb-2 w-full rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
                                    >
                                        ابدأ الاختبار
                                    </button>

                                    {isAdmin && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    (window.location.href = `/quizzes/${quiz.id}/edit`)
                                                }
                                                className="flex-1 rounded-lg bg-yellow-500 px-3 py-1.5 text-sm text-white hover:bg-yellow-600"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                onClick={() => handleDelete(quiz.id)}
                                                className="flex-1 rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                                            >
                                                حذف
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-500">
                            لا توجد اختبارات بعد.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}