<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmergencyFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'emergency_type' => fake()->randomElement(['حادث مروري', 'حريق', 'إصابة خطيرة', 'حالة طبية طارئة']),
            'location' => fake()->address(),
            'description' => fake()->sentence(),
            'status' => 'pending',
        ];
    }
}