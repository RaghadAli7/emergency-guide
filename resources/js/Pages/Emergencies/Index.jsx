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

    // أيقونة حسب نوع الطارئة
    const getEmergencyIcon = (type) => {
        if (type.includes('مروري')) return '🚗';
        if (type.includes('إصابة')) return '🩹';
        if (type.includes('حريق')) return '🔥';
        if (type.includes('طبية')) return '💊';
        return '🚨';
    };

    // لون حسب الحالة
    const getStatusStyle = (status) => {
        if (status === 'pending') return 'bg-yellow-100 text-yellow-800';
        if (status === 'in_progress') return 'bg-blue-100 text-blue-800';
        if (status === 'resolved') return 'bg-green-100 text-green-800';
        return 'bg-gray-100 text-gray-800';
    };

    const getStatusText = (status) => {
        if (status === 'pending') return 'قيد الانتظار';
        if (status === 'in_progress') return 'قيد المعالجة';
        if (status === 'resolved') return 'تم الحل';
        return status;
    };

    return (
        <AuthenticatedLayout>
            <Head title="حالات الطوارئ" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900">
                            حالات الطوارئ
                        </h1>
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
                                    className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                                >
                                    {/* صورة/أيقونة الحالة */}
                                    <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-red-100 to-orange-100">
                                        <span className="text-7xl">
                                            {getEmergencyIcon(emergency.emergency_type)}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        {/* نوع الطارئة + الحالة */}
                                        <div className="mb-3 flex items-center justify-between">
                                            <h5 className="text-lg font-semibold text-gray-800">
                                                {emergency.emergency_type}
                                            </h5>
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusStyle(
                                                    emergency.status
                                                )}`}
                                            >
                                                {getStatusText(emergency.status)}
                                            </span>
                                        </div>

                                        {/* الموقع */}
                                        <p className="mb-2 text-sm text-gray-600">
                                            📍 <strong className="font-medium">الموقع:</strong>{' '}
                                            {emergency.location}
                                        </p>

                                        {/* الوصف المقطوع */}
                                        {emergency.description && (
                                            <p className="mb-4 flex-1 text-gray-600 line-clamp-3">
                                                {emergency.description}
                                            </p>
                                        )}

                                        {/* اسم المستخدم */}
                                        <p className="mb-4 text-xs text-gray-500">
                                            بواسطة:{' '}
                                            {emergency.user
                                                ? emergency.user.name
                                                : 'مجهول'}
                                        </p>

                                        {/* الأزرار */}
                                        <div className="mt-auto flex flex-col gap-2">
                                            {isAdmin && (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => goToEdit(emergency.id)}
                                                        className="flex-1 rounded-lg bg-yellow-500 px-3 py-1.5 text-sm text-white hover:bg-yellow-600"
                                                    >
                                                        تعديل
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(emergency.id)}
                                                        className="flex-1 rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                                                    >
                                                        حذف
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
                            لا توجد حالات طارئة بعد.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}