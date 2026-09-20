import React, { useState } from 'react';
import axios from 'axios';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
    const [form, setForm] = useState({
        title: '',
        content: '',
        video_url: '',
        image: '',
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
            await axios.post('/api/lessons', form);
            window.location.href = '/lessons';
        } catch (error) {
            console.error('تفاصيل الخطأ:', error);
            if (error.response) {
                alert(
                    `خطأ ${error.response.status}: ${JSON.stringify(error.response.data)}`
                );
            } else {
                alert('حدث خطأ أثناء الإضافة');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="إضافة درس جديد" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        إضافة درس جديد
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                عنوان الدرس
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
                                محتوى الدرس
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
                                رابط الفيديو (اختياري)
                            </label>
                            <input
                                type="url"
                                name="video_url"
                                value={form.video_url}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                رابط الصورة (اختياري)
                            </label>
                            <input
                                type="text"
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                placeholder="أدخل رابط الصورة"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isSubmitting ? 'جاري الحفظ...' : 'حفظ'}
                            </button>
                            <Link
                                href="/lessons"
                                className="flex-1 rounded-lg bg-gray-500 px-6 py-3 text-center font-medium text-white hover:bg-gray-600"
                            >
                                إلغاء
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}