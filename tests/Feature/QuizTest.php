<?php

use App\Models\Quiz;
use App\Models\QuizResult;
use App\Models\User;

test('authenticated users can view quizzes', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get('/quizzes')
        ->assertStatus(200);
});

test('user can submit quiz and get result', function () {
    $user = User::factory()->create();
    $quiz = Quiz::factory()->create();

    $question = $quiz->questions()->create([
        'question' => 'ما هو أول شيء يجب فعله؟',
        'option1' => 'خيار 1',
        'option2' => 'خيار 2',
        'option3' => 'خيار 3',
        'option4' => 'خيار 4',
        'correct_option' => 2,
    ]);

    $response = $this->actingAs($user)
        ->postJson('/api/quiz-results', [
            'quiz_id' => $quiz->id,
            'answers' => [
                $question->id => 2,
            ],
        ]);

    $response->assertStatus(201);
    $this->assertDatabaseHas('quiz_results', [
        'user_id' => $user->id,
        'quiz_id' => $quiz->id,
        'score' => 1,
        'total' => 1,
        'percentage' => 100,
    ]);
});

test('user can view their own results', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->getJson('/api/quiz-results')
        ->assertStatus(200);
});