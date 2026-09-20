<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmergencyController;

Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});

Route::get('/emergencies', [EmergencyController::class, 'index']);
Route::post('/emergencies', [EmergencyController::class, 'store']);
Route::put('/emergencies/{id}', [EmergencyController::class, 'update']);
Route::delete('/emergencies/{id}', [EmergencyController::class, 'destroy']);

use App\Http\Controllers\Api\LessonController;
Route::get('/lessons', [LessonController::class, 'index']);
Route::post('/lessons', [LessonController::class, 'store'])->middleware('admin');
Route::put('/lessons/{id}', [LessonController::class, 'update'])->middleware('admin');
Route::delete('/lessons/{id}', [LessonController::class, 'destroy'])->middleware('admin');
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\QuizResultController;
Route::middleware('auth')->group(function () {
    Route::apiResource('quizzes', QuizController::class);
    Route::apiResource('questions', QuestionController::class)->except(['index', 'show']);
    Route::get('/quiz-results', [QuizResultController::class, 'index']);
    Route::post('/quiz-results', [QuizResultController::class, 'store']);
});

