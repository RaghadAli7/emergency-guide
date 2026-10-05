<?php

namespace Database\Seeders;

use App\Models\Emergency;
use App\Models\User;
use Illuminate\Database\Seeder;

class EmergencySeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('type', 1)->first();

        if (!$admin) {
            $this->command->warn('No admin user found. Please create one first.');
            return;
        }

        $emergencies = [
            [
                'emergency_type' => 'Traffic Accident',
                'location' => 'King Faisal Street, Damascus',
                'description' => 'Collision between two cars, moderate injuries',
            ],
            [
                'emergency_type' => 'Serious Injury',
                'location' => 'Al-Mazzeh District, Damascus',
                'description' => 'Fall from height, head injury',
            ],
            [
                'emergency_type' => 'Fire',
                'location' => 'Al-Hamidiyah Souq, Damascus',
                'description' => 'Fire in a commercial shop',
            ],
            [
                'emergency_type' => 'Medical Emergency',
                'location' => 'Baghdad Street, Damascus',
                'description' => 'Heart attack for an elderly man',
            ],
            [
                'emergency_type' => 'Traffic Accident',
                'location' => 'Airport Road, Damascus',
                'description' => 'Truck overturned, multiple injuries',
            ],
            [
                'emergency_type' => 'Serious Injury',
                'location' => 'Municipal Stadium, Damascus',
                'description' => 'Leg fracture during a football match',
            ],
        ];

        foreach ($emergencies as $emergency) {
            Emergency::create([
                'user_id' => $admin->id,
                'emergency_type' => $emergency['emergency_type'],
                'location' => $emergency['location'],
                'description' => $emergency['description'],
                'status' => 'pending',
            ]);
        }

        $this->command->info('Emergencies seeded successfully!');
    }
}