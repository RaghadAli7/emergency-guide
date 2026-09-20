<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emergency extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'emergency_type',
        'location',
        'description',
        'status',
        'resolved_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}