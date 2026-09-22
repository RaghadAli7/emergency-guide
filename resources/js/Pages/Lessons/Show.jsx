import React from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show() {
    const { lesson } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title={lesson.title} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl px-4">
                    {/* زر الرجوع */}
                    <Link
                        href="/lessons"
                        className="mb-6 inline-block text-blue-600 hover:text-blue-800"
                    >
                        ← العودة للدروس
                    </Link>

                    {/* البطاقة الرئيسية */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                        {/* صورة الدرس */}
                        {lesson.image ? (
                            <img
                                src={lesson.image}
                                alt={lesson.title}
                                className="h-64 w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                                <span className="text-8xl">📚</span>
                            </div>
                        )}

                        <div className="p-8">
                            <h1 className="mb-4 text-3xl font-bold text-gray-900">
                                {lesson.title}
                            </h1>

                            {/* محتوى الدرس */}
                            <div className="prose prose-lg max-w-none">
                                <p className="whitespace-pre-line leading-relaxed text-gray-700">
                                    {lesson.content}
                                </p>
                            </div>

                            {/* رابط الفيديو */}
                            {lesson.video_url && (
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <h3 className="mb-4 text-xl font-bold text-gray-800">
                                        🎥 فيديو توضيحي
                                    </h3>
                                    <a
                                        href={lesson.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
                                    >
                                        مشاهدة الفيديو على YouTube
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}