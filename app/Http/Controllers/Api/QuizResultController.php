<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizResult;
use Illuminate\Http\Request;

class QuizResultController extends Controller
{
    // عرض جميع النتائج (للمستخدم: نتائجه فقط، للأدمن: جميع النتائج)
    public function index()
{
    $user = auth()->user();

    if ($user->type === 1) {
        $results = QuizResult::with('user', 'quiz')->latest()->get();
    } else {
        $results = QuizResult::with('quiz')->where('user_id', $user->id)->latest()->get();
    }

    // حساب عدد الاختبارات الناجحة (60% أو أكثر)
    $passedCount = QuizResult::where('user_id', $user->id)
        ->where('percentage', '>=', 60)
        ->distinct('quiz_id')
        ->count('quiz_id');

    return response()->json([
        'results' => $results,
        'passed_count' => $passedCount,
        'eligible_for_certificate' => $passedCount >= 3,
    ]);
}

    // حفظ نتيجة اختبار جديد
    public function store(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'answers' => 'required|array',
        ]);

        $quiz = Quiz::with('questions')->findOrFail($request->quiz_id);
        $score = 0;
        $total = $quiz->questions->count();

        foreach ($quiz->questions as $question) {
            $userAnswer = $request->answers[$question->id] ?? null;
            if ($userAnswer && (int)$userAnswer === (int)$question->correct_option) {
                $score++;
            }
        }

        $percentage = $total > 0 ? round(($score / $total) * 100) : 0;

        $result = QuizResult::create([
            'user_id' => auth()->id(),
            'quiz_id' => $quiz->id,
            'score' => $score,
            'total' => $total,
            'percentage' => $percentage,
        ]);

        return response()->json($result, 201);
    }
}