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
            return;
        }

        $emergencies = [
            [
                'emergency_type' => 'حادث مروري',
                'location' => 'شارع الملك فيصل، دمشق',
                'description' => 'تصادم بين سيارتين، إصابات متوسطة',
            ],
            [
                'emergency_type' => 'إصابة خطيرة',
                'location' => 'حي المزة، دمشق',
                'description' => 'سقوط من ارتفاع، إصابة في الرأس',
            ],
            [
                'emergency_type' => 'حريق',
                'location' => 'سوق الحميدية، دمشق',
                'description' => 'حريق في محل تجاري',
            ],
            [
                'emergency_type' => 'حالة طبية طارئة',
                'location' => 'شارع بغداد، دمشق',
                'description' => 'أزمة قلبية لرجل مسن',
            ],
            [
                'emergency_type' => 'حادث مروري',
                'location' => 'طريق المطار، دمشق',
                'description' => 'انقلاب شاحنة، مصابون متعددون',
            ],
            [
                'emergency_type' => 'إصابة خطيرة',
                'location' => 'الملعب البلدي، دمشق',
                'description' => 'كسر في الساق أثناء مباراة كرة قدم',
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
    }
}