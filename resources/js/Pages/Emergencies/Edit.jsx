import React, { useState } from 'react';
import axios from 'axios';
import { Head, usePage, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit() {
    const { emergency } = usePage().props;

    const [form, setForm] = useState({
        emergency_type: emergency.emergency_type,
        location: emergency.location,
        description: emergency.description || '',
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
            await axios.put(`/api/emergencies/${emergency.id}`, form);
            window.location.href = '/emergencies';
        } catch (error) {
            console.error(error);
            alert('حدث خطأ أثناء التعديل');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="تعديل حالة طارئة" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        تعديل حالة طارئة
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                نوع الطارئة
                            </label>
                            <select
                                name="emergency_type"
                                value={form.emergency_type}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">اختر</option>
                                <option value="حادث مروري">حادث مروري</option>
                                <option value="إصابة خطيرة">إصابة خطيرة</option>
                                <option value="حريق">حريق</option>
                                <option value="حالة طبية طارئة">حالة طبية طارئة</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                الموقع
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                الوصف (اختياري)
                            </label>
                            <textarea
                                name="description"
                                rows="4"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? 'جاري الحفظ...' : 'حفظ التعديلات'}
                            </button>
                            <Link
                                href="/emergencies"
                                className="flex-1 rounded-lg bg-gray-500 px-6 py-3 text-center font-medium text-white transition hover:bg-gray-600"
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