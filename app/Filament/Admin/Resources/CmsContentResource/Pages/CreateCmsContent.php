<?php

namespace App\Filament\Admin\Resources\CmsContentResource\Pages;

use App\Filament\Admin\Resources\CmsContentResource;
use Auth;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCmsContent extends CreateRecord
{
    protected static string $resource = CmsContentResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $key = implode('.', [
            $data['page'],
            $data['component'],
            $data['item'],
        ]);

        $data['key'] = strtolower($key);
        $data['last_updated_by'] = Auth::user()->id;

        return $data;
    }
}
