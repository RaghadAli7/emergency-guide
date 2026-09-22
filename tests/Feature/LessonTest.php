<?php

use App\Models\Lesson;
use App\Models\User;

test('authenticated users can view lessons', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get('/lessons')
        ->assertStatus(200);
});

test('admin can create lesson', function () {
    $admin = User::factory()->create(['type' => 1]);

    $response = $this->actingAs($admin)
        ->postJson('/api/lessons', [
            'title' => 'درس تجريبي',
            'content' => 'محتوى الدرس',
            'video_url' => 'https://youtube.com/watch?v=test',
        ]);

    $response->assertStatus(201);
    $this->assertDatabaseHas('lessons', [
        'title' => 'درس تجريبي',
    ]);
});

test('admin can delete lesson', function () {
    $admin = User::factory()->create(['type' => 1]);
    $lesson = Lesson::factory()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/lessons/{$lesson->id}")
        ->assertStatus(200);

    $this->assertDatabaseMissing('lessons', [
        'id' => $lesson->id,
    ]);
});