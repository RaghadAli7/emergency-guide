<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// صفحات الحالات الطارئة
Route::get('/emergencies', function () {
    $emergencies = \App\Models\Emergency::with('user')->latest()->get();
    return Inertia::render('Emergencies/Index', [
        'emergencies' => $emergencies,
    ]);
})->middleware(['auth', 'verified'])->name('emergencies.index');

Route::get('/emergencies/create', function () {
    return Inertia::render('Emergencies/Create');
})->middleware(['auth', 'verified', 'admin'])->name('emergencies.create');

Route::get('/emergencies/{id}/edit', function ($id) {
    $emergency = \App\Models\Emergency::findOrFail($id);
    return Inertia::render('Emergencies/Edit', [
        'emergency' => $emergency,
    ]);
})->middleware(['auth', 'verified', 'admin'])->name('emergencies.edit');
Route::get('/lessons', function () {
    $lessons = \App\Models\Lesson::latest()->get();
    return Inertia::render('Lessons/Index', [
        'lessons' => $lessons,
    ]);
})->middleware(['auth', 'verified'])->name('lessons.index');

Route::get('/lessons/create', function () {
    return Inertia::render('Lessons/Create');
})->middleware(['auth', 'verified', 'admin'])->name('lessons.create');

Route::get('/lessons/{id}/edit', function ($id) {
    $lesson = \App\Models\Lesson::findOrFail($id);
    return Inertia::render('Lessons/Edit', [
        'lesson' => $lesson,
    ]);
})->middleware(['auth', 'verified', 'admin'])->name('lessons.edit');
Route::get('/quizzes', function () {
    $quizzes = \App\Models\Quiz::with('questions')->latest()->get();
    return Inertia::render('Quizzes/Index', [
        'quizzes' => $quizzes,
    ]);
})->middleware(['auth', 'verified'])->name('quizzes.index');

Route::get('/quizzes/create', function () {
    return Inertia::render('Quizzes/Create');
})->middleware(['auth', 'verified', 'admin'])->name('quizzes.create');

Route::get('/quizzes/{id}/edit', function ($id) {
    $quiz = \App\Models\Quiz::with('questions')->findOrFail($id);
    return Inertia::render('Quizzes/Edit', [
        'quiz' => $quiz,
    ]);
})->middleware(['auth', 'verified', 'admin'])->name('quizzes.edit');
// صفحة حل الاختبار
Route::get('/quizzes/{id}/take', function ($id) {
    $quiz = \App\Models\Quiz::with('questions')->findOrFail($id);
    return Inertia::render('Quizzes/Take', [
        'quiz' => $quiz,
    ]);
})->middleware(['auth', 'verified'])->name('quizzes.take');

// صفحة عرض النتائج
Route::get('/quiz-results', function () {
    return Inertia::render('Quizzes/Results');
})->middleware(['auth', 'verified'])->name('quiz-results.index');
Route::get('/certificate', function () {
    $user = auth()->user();

    $passedCount = \App\Models\QuizResult::where('user_id', $user->id)
        ->where('percentage', '>=', 60)
        ->distinct('quiz_id')
        ->count('quiz_id');

    if ($passedCount < 3) {
        return redirect('/quiz-results')->with('error', 'يجب اجتياز 3 اختبارات على الأقل للحصول على الشهادة');
    }

    return Inertia::render('Certificate', [
        'user' => $user,
        'passedCount' => $passedCount,
        'date' => now()->format('Y-m-d'),
    ]);
})->middleware(['auth', 'verified'])->name('certificate');
require __DIR__.'/auth.php';
