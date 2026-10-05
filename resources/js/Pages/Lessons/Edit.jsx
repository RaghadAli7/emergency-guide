import React, { useState } from 'react';
import axios from 'axios';
import { Head, usePage, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit() {
    const { lesson } = usePage().props;

    const [form, setForm] = useState({
        title: lesson.title,
        content: lesson.content,
        video_url: lesson.video_url || '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.put(`/api/lessons/${lesson.id}`, form);
            window.location.href = '/lessons';
        } catch (error) {
            console.error(error);
            alert('An error occurred while updating');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Lesson" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        Edit Lesson
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Lesson Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Lesson Content
                            </label>
                            <textarea
                                name="content"
                                rows="6"
                                value={form.content}
                                onChange={handleChange}
                                required
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Video URL (Optional)
                            </label>
                            <input
                                type="url"
                                name="video_url"
                                value={form.video_url}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Saving...' : 'Save Changes'}
                            </button>
                            <Link
                                href="/lessons"
                                className="flex-1 rounded-lg bg-gray-500 px-6 py-3 text-center font-medium text-white hover:bg-gray-600"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}