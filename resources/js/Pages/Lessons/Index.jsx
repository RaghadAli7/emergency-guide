import React from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index() {
    const { lessons = [], auth } = usePage().props;
    const isAdmin = auth?.user?.type === 1;

    const handleDelete = async (id) => {
        if (confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
            try {
                await axios.delete(`/api/lessons/${id}`);
                window.location.href = '/lessons';
            } catch (error) {
                console.error(error);
                alert('حدث خطأ أثناء الحذف');
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="الدروس التعليمية" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            الدروس التعليمية
                        </h1>
                        {isAdmin && (
                            <button
                                onClick={() => (window.location.href = '/lessons/create')}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                إضافة درس جديد
                            </button>
                        )}
                    </div>

                    {Array.isArray(lessons) && lessons.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
                                >
                                    <h5 className="mb-2 text-lg font-semibold text-gray-800">
                                        {lesson.title}
                                    </h5>
                                    <p className="mb-4 text-gray-600 line-clamp-3">
                                        {lesson.content}
                                    </p>
                                    {isAdmin && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    (window.location.href = `/lessons/${lesson.id}/edit`)
                                                }
                                                className="rounded-lg bg-yellow-500 px-3 py-1.5 text-sm text-white hover:bg-yellow-600"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                onClick={() => handleDelete(lesson.id)}
                                                className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
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
                            لا توجد دروس تعليمية بعد.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}