import React, { useState } from 'react';
import axios from 'axios';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Take() {
    const { quiz } = usePage().props;
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAnswer = (questionId, option) => {
        setAnswers((prev) => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/quiz-results', {
                quiz_id: quiz.id,
                answers: answers,
            });
            setResult(response.data);
        } catch (error) {
            console.error(error);
            alert('حدث خطأ أثناء إرسال الإجابات');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (result) {
        return (
            <AuthenticatedLayout>
                <Head title="نتيجة الاختبار" />

                <div className="py-12">
                    <div className="mx-auto max-w-2xl px-4">
                        <div className="rounded-xl bg-white p-8 text-center shadow-lg">
                            <h1 className="mb-6 text-3xl font-bold text-gray-900">
                                نتيجتك
                            </h1>
                            <div
                                className={`mb-4 text-6xl font-bold ${
                                    result.percentage >= 60
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }`}
                            >
                                {result.percentage}%
                            </div>
                            <p className="mb-6 text-xl text-gray-700">
                                أجبت بشكل صحيح على {result.score} من {result.total}{' '}
                                أسئلة
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="/quizzes"
                                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                                >
                                    العودة للاختبارات
                                </a>
                                <a
                                    href="/quiz-results"
                                    className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
                                >
                                    عرض نتائجي
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <Head title={quiz.title} />

            <div className="py-12">
                <div className="mx-auto max-w-3xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        {quiz.title}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {quiz.questions.map((q, index) => (
                            <div
                                key={q.id}
                                className="rounded-xl bg-white p-6 shadow-lg"
                            >
                                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                                    سؤال {index + 1}: {q.question}
                                </h3>

                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map((optNum) => (
                                        <label
                                            key={optNum}
                                            className={`flex cursor-pointer items-center rounded-lg border p-3 transition ${
                                                answers[q.id] === optNum
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-300 hover:border-blue-300'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name={`question_${q.id}`}
                                                value={optNum}
                                                checked={answers[q.id] === optNum}
                                                onChange={() =>
                                                    handleAnswer(q.id, optNum)
                                                }
                                                className="mr-3"
                                                required
                                            />
                                            <span>{q[`option${optNum}`]}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-blue-600 py-4 text-lg font-bold text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isSubmitting ? 'جاري الإرسال...' : 'إرسال الإجابات'}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}