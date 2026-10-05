import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Results() {
    const [results, setResults] = useState([]);
    const [passedCount, setPassedCount] = useState(0);
    const [eligibleForCertificate, setEligibleForCertificate] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('/api/quiz-results')
            .then((response) => {
                const data = response.data;
                setResults(data.results || []);
                setPassedCount(data.passed_count || 0);
                setEligibleForCertificate(data.eligible_for_certificate || false);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <AuthenticatedLayout>
                <Head title="Quiz Results" />
                <div className="flex min-h-[60vh] items-center justify-center">
                    <p className="text-gray-500">Loading...</p>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <Head title="Quiz Results" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4">
                    <h1 className="mb-6 text-2xl font-bold text-gray-900">
                        Quiz Results
                    </h1>

                    {eligibleForCertificate && (
                        <div className="mb-6 rounded border-l-4 border-green-500 bg-green-100 p-4">
                            <p className="mb-2 font-bold text-green-800">
                                🎉 Congratulations! You have passed {passedCount} quizzes. You can get your certificate now!
                            </p>
                            <a
                                href="/certificate"
                                className="inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                            >
                                🎓 View Certificate
                            </a>
                        </div>
                    )}

                    {results.length > 0 ? (
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                            Quiz
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                            User
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                            Score
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                            Percentage
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {results.map((result) => (
                                        <tr key={result.id}>
                                            <td className="px-6 py-4">
                                                {result.quiz?.title || '—'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {result.user?.name || 'Me'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {result.score} / {result.total}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`rounded-full px-2 py-1 text-sm ${
                                                        result.percentage >= 60
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {result.percentage}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {new Date(
                                                    result.created_at
                                                ).toLocaleDateString('en-US')}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="py-12 text-center text-gray-500">
                            No results yet.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}