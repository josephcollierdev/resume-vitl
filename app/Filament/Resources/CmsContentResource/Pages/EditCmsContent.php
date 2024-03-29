<?php

namespace App\Filament\Resources\CmsContentResource\Pages;

use App\Filament\Resources\CmsContentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCmsContent extends EditRecord
{
    protected static string $resource = CmsContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $key = implode('.', [
            $data['page'],
            $data['component'],
            $data['item'],
        ]);

        $data['key'] = strtolower($key);

        return $data;
    }
}
