<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        return response()->json(Quiz::with('questions')->latest()->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'questions' => 'required|array|min:1',
            'questions.*.question' => 'required|string',
            'questions.*.option1' => 'required|string',
            'questions.*.option2' => 'required|string',
            'questions.*.option3' => 'required|string',
            'questions.*.option4' => 'required|string',
            'questions.*.correct_option' => 'required|integer|between:1,4',
        ]);

        $quiz = Quiz::create([
            'title' => $request->title,
            'description' => $request->description,
            'image_url' => $request->image_url,
        ]);

        foreach ($request->questions as $q) {
            $quiz->questions()->create([
                'question' => $q['question'],
                'option1' => $q['option1'],
                'option2' => $q['option2'],
                'option3' => $q['option3'],
                'option4' => $q['option4'],
                'correct_option' => $q['correct_option'],
            ]);
        }

        return response()->json($quiz->load('questions'), 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'questions' => 'array|min:1',
            'questions.*.question' => 'required|string',
            'questions.*.option1' => 'required|string',
            'questions.*.option2' => 'required|string',
            'questions.*.option3' => 'required|string',
            'questions.*.option4' => 'required|string',
            'questions.*.correct_option' => 'required|integer|between:1,4',
        ]);

        $quiz = Quiz::findOrFail($id);
        $quiz->update([
            'title' => $request->title,
            'description' => $request->description,
            'image_url' => $request->image_url,
        ]);

        $quiz->questions()->delete();
        foreach ($request->questions as $q) {
            $quiz->questions()->create([
                'question' => $q['question'],
                'option1' => $q['option1'],
                'option2' => $q['option2'],
                'option3' => $q['option3'],
                'option4' => $q['option4'],
                'correct_option' => $q['correct_option'],
            ]);
        }

        return response()->json($quiz->load('questions'), 200);
    }

    public function destroy($id)
    {
        $quiz = Quiz::findOrFail($id);
        $quiz->delete();
        return response()->json(['message' => 'تم الحذف بنجاح'], 200);
    }
}