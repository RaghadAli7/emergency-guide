<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Create Admin User
        User::updateOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('admin123'),
                'type' => 1,
            ]
        );

        // Create Regular Test User
        User::updateOrCreate(
            ['email' => 'user@gmail.com'],
            [
                'name' => 'Test User',
                'password' => Hash::make('user123'),
                'type' => 0,
            ]
        );

        $this->command->info('Users seeded successfully!');
    }
}