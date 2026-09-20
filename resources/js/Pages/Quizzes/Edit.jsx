import React, { useState } from 'react';
import axios from 'axios';
import { Head, usePage, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit() {
    const { quiz } = usePage().props;

    const [form, setForm] = useState({
        title: quiz.title,
        description: quiz.description || '',
    });
    const [questions, setQuestions] = useState(
        quiz.questions.map((q) => ({
            question: q.question,
            option1: q.option1,
            option2: q.option2,
            option3: q.option3,
            option4: q.option4,
            correct_option: q.correct_option,
        }))
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        updated[index][field] = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: '',
                option1: '',
                option2: '',
                option3: '',
                option4: '',
                correct_option: 1,
            },
        ]);
    };

    const removeQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.put(`/api/quizzes/${quiz.id}`, { ...form, questions });
            window.location.href = '/quizzes';
        } catch (error) {
            console.error(error);
            alert('حدث خطأ أثناء التعديل');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="تعديل الاختبار" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        تعديل الاختبار
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                عنوان الاختبار
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
                                الوصف (اختياري)
                            </label>
                            <textarea
                                name="description"
                                rows="3"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">الأسئلة</h3>

                        {questions.map((q, index) => (
                            <div
                                key={index}
                                className="space-y-3 rounded-lg bg-gray-50 p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-gray-700">
                                        سؤال {index + 1}
                                    </h4>
                                    {questions.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeQuestion(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            حذف السؤال
                                        </button>
                                    )}
                                </div>

                                <input
                                    type="text"
                                    placeholder="نص السؤال"
                                    value={q.question}
                                    onChange={(e) =>
                                        handleQuestionChange(
                                            index,
                                            'question',
                                            e.target.value
                                        )
                                    }
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="الخيار 1"
                                        value={q.option1}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                index,
                                                'option1',
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="rounded-lg border border-gray-300 px-4 py-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="الخيار 2"
                                        value={q.option2}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                index,
                                                'option2',
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="rounded-lg border border-gray-300 px-4 py-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="الخيار 3"
                                        value={q.option3}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                index,
                                                'option3',
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="rounded-lg border border-gray-300 px-4 py-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="الخيار 4"
                                        value={q.option4}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                index,
                                                'option4',
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="rounded-lg border border-gray-300 px-4 py-2"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm text-gray-600">
                                        الإجابة الصحيحة
                                    </label>
                                    <select
                                        value={q.correct_option}
                                        onChange={(e) =>
                                            handleQuestionChange(
                                                index,
                                                'correct_option',
                                                parseInt(e.target.value)
                                            )
                                        }
                                        className="rounded-lg border border-gray-300 px-4 py-2"
                                    >
                                        <option value="1">الخيار 1</option>
                                        <option value="2">الخيار 2</option>
                                        <option value="3">الخيار 3</option>
                                        <option value="4">الخيار 4</option>
                                    </select>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addQuestion}
                            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                            إضافة سؤال
                        </button>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isSubmitting ? 'جاري الحفظ...' : 'حفظ التعديلات'}
                            </button>
                            <Link
                                href="/quizzes"
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