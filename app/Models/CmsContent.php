<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'page',
        'component',
        'item',
        'content',
        'last_updated_by'
    ];

    public static function getByKey($key)
    {
        return self::where('key', $key);
    }
}
