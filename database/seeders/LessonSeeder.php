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
                'title' => 'الإسعافات الأولية للحروق',
                'content' => 'الحروق من الإصابات الشائعة. التعامل السريع والصحيح مع الحروق يقلل من الضرر ويمنع حدوث مضاعفات خطيرة. خطوات الإسعاف: 1. إزالة المصدر المسبب للحرق. 2. تبريد مكان الحرق بالماء البارد لمدة 10-20 دقيقة. 3. تجنب استخدام الثلج مباشرة. 4. تغطية الحرق بشاش نظيف. 5. عدم فتح البثور.',
                'video_url' => 'https://www.youtube.com/watch?v=3uR4P2i_TKM',
                'image' => null,
            ],
            [
                'title' => 'الإسعافات الأولية للنزيف',
                'content' => 'النزيف الخارجي هو فقدان الدم الناتج عن جرح. خطوات الإسعاف: 1. الضغط المباشر على الجرح بقطعة قماش نظيفة. 2. رفع الطرف المصاب. 3. عدم إزالة الشاش المستخدم. 4. طلب الإسعاف في الحالات الخطيرة.',
                'video_url' => 'https://www.youtube.com/watch?v=2YrAczTMM04',
                'image' => null,
            ],
            [
                'title' => 'الإنعاش القلبي الرئوي (CPR)',
                'content' => 'الإنعاش القلبي الرئوي هو إجراء إسعافي حيوي يُستخدم عندما يتوقف القلب عن النبض. الخطوات: 1. تأكد من السلامة. 2. تحقق من الوعي. 3. اطلب المساعدة. 4. ابدأ بالضغطات الصدرية (100-120 ضغطة/دقيقة). 5. أعطِ النفس الاصطناعي.',
                'video_url' => 'https://www.youtube.com/watch?v=cosVBV96E2g',
                'image' => null,
            ],
            [
                'title' => 'الاختناق (Choking)',
                'content' => 'الاختناق هو انسداد في مجرى التنفس. الإسعاف: 1. شجع المصاب على السعال. 2. نفذ تقنية هيمليك. 3. إذا فقد الوعي، ابدأ CPR.',
                'video_url' => 'https://www.youtube.com/watch?v=7OyHpduIMaM',
                'image' => null,
            ],
            [
                'title' => 'الإغماء وفقدان الوعي',
                'content' => 'الإغماء هو فقدان مؤقت للوعي. الإسعاف: 1. ضع المصاب على ظهره. 2. ارفع قدميه. 3. فك الملابس الضيقة. 4. تحقق من التنفس.',
                'video_url' => 'https://www.youtube.com/watch?v=PeaTlfRwX2k',
                'image' => null,
            ],
        ];

        foreach ($lessons as $lesson) {
            Lesson::create($lesson);
        }
    }
}