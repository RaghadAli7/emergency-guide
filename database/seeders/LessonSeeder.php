<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    public function run(): void
    {
        $lessons = [
            [
                'title' => 'First Aid for Burns',
                'content' => 'Burns are common injuries that a person may experience due to heat sources such as fire, hot liquids, chemicals, or electricity. Quick and correct handling of burns reduces damage and prevents serious complications.

First Aid Steps for Burns:
1. Safely remove the source causing the burn.
2. Immediately cool the burn area with cold water for 10-20 minutes.
3. Avoid using ice directly.
4. Cover the burn with a clean gauze.
5. Do not pop blisters.
6. Seek emergency help if the burn is large or deep.',
                'video_url' => 'https://www.youtube.com/watch?v=3uR4P2i_TKM',
                'image' => null,
            ],
            [
                'title' => 'First Aid for Bleeding',
                'content' => 'External bleeding is the loss of blood resulting from a wound or tear in blood vessels. Quick handling prevents excessive blood loss.

First Aid Steps:
1. Wear protective gloves if possible.
2. Apply direct pressure to the wound with a clean cloth.
3. Elevate the injured limb above heart level.
4. Do not remove the gauze used for pressure.
5. Seek emergency help in serious cases.',
                'video_url' => 'https://www.youtube.com/watch?v=2YrAczTMM04',
                'image' => null,
            ],
            [
                'title' => 'Cardiopulmonary Resuscitation (CPR)',
                'content' => 'Cardiopulmonary resuscitation is a vital first aid procedure used when the heart stops beating or the person stops breathing.

Steps:
1. Ensure safety.
2. Check for consciousness.
3. Call for help immediately.
4. Begin chest compressions (100-120 compressions per minute).
5. Give rescue breaths (30 compressions + 2 breaths).
6. Use an AED if available.',
                'video_url' => 'https://www.youtube.com/watch?v=cosVBV96E2g',
                'image' => null,
            ],
            [
                'title' => 'Choking',
                'content' => 'Choking is a blockage in the airway that prevents air from reaching the lungs.

First Aid:
1. For partial choking: encourage the person to cough forcefully.
2. For complete choking: perform the Heimlich maneuver.
3. If the person loses consciousness: start CPR immediately.',
                'video_url' => 'https://www.youtube.com/watch?v=7OyHpduIMaM',
                'image' => null,
            ],
            [
                'title' => 'Fainting and Loss of Consciousness',
                'content' => 'Fainting is a temporary loss of consciousness caused by a sudden drop in blood flow to the brain.

First Aid:
1. Place the person on their back and elevate their feet.
2. Loosen tight clothing.
3. Check breathing and pulse.
4. If breathing stops, start CPR.
5. Monitor the person until they regain consciousness.',
                'video_url' => 'https://www.youtube.com/watch?v=PeaTlfRwX2k',
                'image' => null,
            ],
        ];

        foreach ($lessons as $lesson) {
            Lesson::create($lesson);
        }

        $this->command->info('Lessons seeded successfully!');
    }
}