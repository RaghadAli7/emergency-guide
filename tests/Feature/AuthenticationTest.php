<?php

use App\Models\User;

test('guests cannot access protected pages', function () {
    $this->get('/dashboard')->assertRedirect('/login');
    $this->get('/emergencies')->assertRedirect('/login');
    $this->get('/lessons')->assertRedirect('/login');
    $this->get('/quizzes')->assertRedirect('/login');
});

test('users can register', function () {
    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $response->assertRedirect('/dashboard');
    $this->assertDatabaseHas('users', [
        'email' => 'test@example.com',
    ]);
});

test('users can login', function () {
    $user = User::factory()->create([
        'password' => bcrypt('password123'),
    ]);

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password123',
    ]);

    $response->assertRedirect('/dashboard');
    $this->assertAuthenticatedAs($user);
});

test('users can logout', function () {
    $user = User::factory()->create();

    $this->actingAs($user);
    $this->post('/logout');

    $this->assertGuest();
});