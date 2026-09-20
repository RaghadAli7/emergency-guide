import React from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index() {
    const { emergencies = [], auth } = usePage().props;
    const isAdmin = auth?.user?.type === 1;

    const goToCreate = () => {
        window.location.href = '/emergencies/create';
    };

    const goToEdit = (id) => {
        window.location.href = `/emergencies/${id}/edit`;
    };

    const handleDelete = async (id) => {
        if (confirm('هل أنت متأكد من حذف هذه الحالة؟')) {
            try {
                await axios.delete(`/api/emergencies/${id}`);
                window.location.href = '/emergencies';
            } catch (error) {
                console.error(error);
                alert('حدث خطأ أثناء الحذف');
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="حالات الطوارئ" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">حالات الطوارئ</h1>
                        {isAdmin && (
                            <button
                                onClick={goToCreate}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                إضافة حالة جديدة
                            </button>
                        )}
                    </div>

                    {Array.isArray(emergencies) && emergencies.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {emergencies.map((emergency) => (
                                <div
                                    key={emergency.id}
                                    className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
                                >
                                    <h5 className="mb-2 text-lg font-semibold text-gray-800">
                                        {emergency.emergency_type}
                                    </h5>
                                    <p className="mb-2 text-gray-600">
                                        <strong className="font-medium">الموقع:</strong>{' '}
                                        {emergency.location}
                                    </p>
                                    {emergency.description && (
                                        <p className="mb-2 text-gray-600">
                                            {emergency.description}
                                        </p>
                                    )}
                                    <p className="mb-4 text-sm text-gray-500">
                                        بواسطة:{' '}
                                        {emergency.user ? emergency.user.name : 'مجهول'}
                                    </p>
                                    {isAdmin && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => goToEdit(emergency.id)}
                                                className="rounded-lg bg-yellow-500 px-3 py-1.5 text-sm text-white hover:bg-yellow-600"
                                            >
                                                تعديل
                                            </button>
                                            <button
                                                onClick={() => handleDelete(emergency.id)}
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
                            لا توجد حالات طارئة بعد.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}