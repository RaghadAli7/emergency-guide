<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Emergency;
use Illuminate\Http\Request;

class EmergencyController extends Controller
{
    // جلب جميع الحالات
    public function index()
    {
        return response()->json(Emergency::with('user')->latest()->get());
    }

    // إضافة حالة جديدة
    public function store(Request $request)
    {
        $request->validate([
            'emergency_type' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $emergency = Emergency::create([
            'user_id' => auth()->id(),
            'emergency_type' => $request->emergency_type,
            'location' => $request->location,
            'description' => $request->description,
        ]);

        return response()->json($emergency, 201);
    }

    // تحديث حالة
    public function update(Request $request, $id)
    {
        $request->validate([
            'emergency_type' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $emergency = Emergency::findOrFail($id);
        $emergency->update([
            'emergency_type' => $request->emergency_type,
            'location' => $request->location,
            'description' => $request->description,
        ]);

        return response()->json($emergency, 200);
    }

    // حذف حالة
    public function destroy($id)
    {
        $emergency = Emergency::findOrFail($id);
        $emergency->delete();

        return response()->json(['message' => 'تم الحذف بنجاح'], 200);
    }
}