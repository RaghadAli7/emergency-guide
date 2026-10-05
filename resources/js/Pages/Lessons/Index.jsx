import React from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index() {
    const { lessons = [], auth } = usePage().props;
    const isAdmin = auth?.user?.type === 1;

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this lesson?')) {
            try {
                await axios.delete(`/api/lessons/${id}`);
                window.location.href = '/lessons';
            } catch (error) {
                console.error(error);
                alert('An error occurred while deleting');
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Educational Lessons" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Educational Lessons
                        </h1>
                        {isAdmin && (
                            <button
                                onClick={() => (window.location.href = '/lessons/create')}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Add New Lesson
                            </button>
                        )}
                    </div>

                    {Array.isArray(lessons) && lessons.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                                >
                                    {/* Lesson Image */}
                                    {lesson.image ? (
                                        <img
                                            src={lesson.image}
                                            alt={lesson.title}
                                            className="h-48 w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                                            <span className="text-6xl">📚</span>
                                        </div>
                                    )}

                                    <div className="flex flex-1 flex-col p-6">
                                        <h5 className="mb-2 text-lg font-semibold text-gray-800">
                                            {lesson.title}
                                        </h5>
                                        <p className="mb-4 flex-1 text-gray-600 line-clamp-3">
                                            {lesson.content}
                                        </p>

                                        <div className="mt-auto flex flex-col gap-2">
                                            <button
                                                onClick={() =>
                                                    (window.location.href = `/lessons/${lesson.id}`)
                                                }
                                                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                            >
                                                Read More
                                            </button>

                                            {isAdmin && (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            (window.location.href = `/lessons/${lesson.id}/edit`)
                                                        }
                                                        className="flex-1 rounded-lg bg-yellow-500 px-3 py-1.5 text-sm text-white hover:bg-yellow-600"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(lesson.id)}
                                                        className="flex-1 rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-500">
                            No educational lessons yet.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}