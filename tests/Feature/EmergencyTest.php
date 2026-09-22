<?php

use App\Models\Emergency;
use App\Models\User;

test('authenticated users can view emergencies list', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get('/emergencies')
        ->assertStatus(200);
});

test('admin can create emergency', function () {
    $admin = User::factory()->create(['type' => 1]);

    $response = $this->actingAs($admin)
        ->postJson('/api/emergencies', [
            'emergency_type' => 'حادث مروري',
            'location' => 'شارع الملك فيصل',
            'description' => 'تصادم بين سيارتين',
        ]);

    $response->assertStatus(201);
    $this->assertDatabaseHas('emergencies', [
        'emergency_type' => 'حادث مروري',
        'location' => 'شارع الملك فيصل',
    ]);
});

test('admin can update emergency', function () {
    $admin = User::factory()->create(['type' => 1]);
    $emergency = Emergency::factory()->create();

    $response = $this->actingAs($admin)
        ->putJson("/api/emergencies/{$emergency->id}", [
            'emergency_type' => 'حريق',
            'location' => 'موقع جديد',
            'description' => 'وصف جديد',
        ]);

    $response->assertStatus(200);
    $this->assertDatabaseHas('emergencies', [
        'id' => $emergency->id,
        'emergency_type' => 'حريق',
    ]);
});

test('admin can delete emergency', function () {
    $admin = User::factory()->create(['type' => 1]);
    $emergency = Emergency::factory()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/emergencies/{$emergency->id}")
        ->assertStatus(200);

    $this->assertDatabaseMissing('emergencies', [
        'id' => $emergency->id,
    ]);
});