<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'question' => 'required|string',
            'option1' => 'required|string',
            'option2' => 'required|string',
            'option3' => 'required|string',
            'option4' => 'required|string',
            'correct_option' => 'required|integer|between:1,4',
        ]);

        $question = Question::create($request->all());
        return response()->json($question, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'question' => 'required|string',
            'option1' => 'required|string',
            'option2' => 'required|string',
            'option3' => 'required|string',
            'option4' => 'required|string',
            'correct_option' => 'required|integer|between:1,4',
        ]);

        $question = Question::findOrFail($id);
        $question->update($request->all());
        return response()->json($question, 200);
    }

    public function destroy($id)
    {
        $question = Question::findOrFail($id);
        $question->delete();
        return response()->json(['message' => 'تم الحذف بنجاح'], 200);
    }
}