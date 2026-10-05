import React, { useState } from 'react';
import axios from 'axios';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
    const [form, setForm] = useState({
        emergency_type: '',
        location: '',
        description: '',
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
            await axios.post('/api/emergencies', form);
            window.location.href = '/emergencies';
        } catch (error) {
            console.error(error);
            alert('An error occurred while adding');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Emergency Case" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl px-4">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        Add New Emergency Case
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
                    >
                        <div>
                            <label
                                htmlFor="emergency_type"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Emergency Type
                            </label>
                            <select
                                id="emergency_type"
                                name="emergency_type"
                                value={form.emergency_type}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select</option>
                                <option value="Traffic Accident">Traffic Accident</option>
                                <option value="Serious Injury">Serious Injury</option>
                                <option value="Fire">Fire</option>
                                <option value="Medical Emergency">Medical Emergency</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="location"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                required
                                placeholder="Enter the location in detail"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Description (Optional)
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Enter a detailed description of the case"
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? 'Saving...' : 'Save Case'}
                            </button>
                            <Link
                                href="/emergencies"
                                className="flex-1 rounded-lg bg-gray-500 px-6 py-3 text-center font-medium text-white transition hover:bg-gray-600"
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