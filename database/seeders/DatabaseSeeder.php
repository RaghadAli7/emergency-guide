<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,        // 1. أولاً: إنشاء المستخدمين
            EmergencySeeder::class,   // 2. ثانياً: الحالات الطارئة
            LessonSeeder::class,      // 3. ثالثاً: الدروس
            QuizSeeder::class,        // 4. رابعاً: الاختبارات
        ]);
    }
}