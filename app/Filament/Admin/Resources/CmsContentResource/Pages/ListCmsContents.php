<?php

namespace App\Filament\Admin\Resources\CmsContentResource\Pages;

use App\Filament\Admin\Resources\CmsContentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCmsContents extends ListRecords
{
    protected static string $resource = CmsContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
