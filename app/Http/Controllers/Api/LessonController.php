<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index()
    {
        return response()->json(Lesson::latest()->get());
    }
    public function store(Request $request)
{
    try {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'video_url' => 'nullable|string',
        ]);

        $lesson = new Lesson();
        $lesson->title = $request->title;
        $lesson->content = $request->content;
        $lesson->video_url = $request->video_url;
        $lesson->image = null;
        $lesson->save();

        return response()->json($lesson, 201);
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
        ], 500);
    }
}

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'video_url' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        $lesson = Lesson::findOrFail($id);
        $lesson->update($request->all());
        return response()->json($lesson, 200);
    }

    public function destroy($id)
    {
        $lesson = Lesson::findOrFail($id);
        $lesson->delete();
        return response()->json(['message' => 'تم الحذف بنجاح'], 200);
    }
}