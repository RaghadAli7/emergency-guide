<?php

namespace Database\Seeders;

use App\Models\Quiz;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    public function run(): void
    {
        // Quiz 1: First Aid Basics
        $quiz1 = Quiz::create([
            'title' => 'First Aid Basics',
            'description' => 'A comprehensive quiz on the basics of first aid that everyone should know',
        ]);

        $quiz1->questions()->createMany([
            [
                'question' => 'What is the first thing you should do when arriving at an accident scene?',
                'option1' => 'Start CPR immediately',
                'option2' => 'Secure the scene and ensure your personal safety',
                'option3' => 'Move the injured person to a more comfortable place',
                'option4' => 'Give water to the injured person',
                'correct_option' => 2,
            ],
            [
                'question' => 'How do you stop severe bleeding from a wound?',
                'option1' => 'Using an antibiotic ointment',
                'option2' => 'By applying direct pressure to the wound with a clean bandage',
                'option3' => 'By washing the wound with cold water',
                'option4' => 'By leaving the wound untreated',
                'correct_option' => 2,
            ],
            [
                'question' => 'What is the correct procedure for treating first-degree burns?',
                'option1' => 'Applying ice directly to the burn',
                'option2' => 'Applying butter or oil to the burn',
                'option3' => 'Cooling the area with running water for 10-15 minutes',
                'option4' => 'Rubbing the burned area',
                'correct_option' => 3,
            ],
        ]);

        // Quiz 2: Cardiopulmonary Resuscitation (CPR)
        $quiz2 = Quiz::create([
            'title' => 'Cardiopulmonary Resuscitation (CPR)',
            'description' => 'Test your knowledge of CPR for adults',
        ]);

        $quiz2->questions()->createMany([
            [
                'question' => 'How many chest compressions per minute are recommended?',
                'option1' => '60-80 compressions',
                'option2' => '100-120 compressions',
                'option3' => '140-160 compressions',
                'option4' => '40-60 compressions',
                'correct_option' => 2,
            ],
            [
                'question' => 'What is the depth of chest compressions for adults?',
                'option1' => '1-2 cm',
                'option2' => '3-4 cm',
                'option3' => '5-6 cm',
                'option4' => 'Depth does not matter',
                'correct_option' => 3,
            ],
            [
                'question' => 'What is the ratio between chest compressions and rescue breaths?',
                'option1' => '5 compressions per breath',
                'option2' => '15 compressions per 2 breaths',
                'option3' => '30 compressions per 2 breaths',
                'option4' => '50 compressions per breath',
                'correct_option' => 3,
            ],
        ]);

        // Quiz 3: Burns and Wounds
        $quiz3 = Quiz::create([
            'title' => 'Burns and Wounds',
            'description' => 'How to handle burns and wounds of all types',
        ]);

        $quiz3->questions()->createMany([
            [
                'question' => 'What is a common mistake in treating burns?',
                'option1' => 'Using cold water',
                'option2' => 'Using butter or oils',
                'option3' => 'Covering the burn with a clean bandage',
                'option4' => 'Giving pain relievers',
                'correct_option' => 2,
            ],
            [
                'question' => 'What are the signs of wound infection?',
                'option1' => 'Redness and swelling',
                'option2' => 'Pain that increases over time',
                'option3' => 'Pus discharge',
                'option4' => 'All of the above',
                'correct_option' => 4,
            ],
            [
                'question' => 'What is the maximum time to apply ice to an injury?',
                'option1' => '5 minutes',
                'option2' => '15-20 minutes',
                'option3' => 'A full hour',
                'option4' => 'Until the pain goes away',
                'correct_option' => 2,
            ],
        ]);

        $this->command->info('Quizzes seeded successfully!');
    }
}