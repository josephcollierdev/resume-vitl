<?php

namespace App\Filament\Admin\Resources;

use App\Filament\Admin\Resources\CmsContentResource\Pages;
use App\Filament\Admin\Resources\CmsContentResource\RelationManagers;
use App\Models\CmsContent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CmsContentResource extends Resource
{
    protected static ?string $model = CmsContent::class;

    protected static ?string $modelLabel = 'CMS Content';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('key')
                    ->label('Key')
                    ->disabled()
                    ->columnSpan('full'),
                Forms\Components\TextInput::make('page')
                    ->label('Page')
                    ->required(),
                Forms\Components\TextInput::make('component')
                    ->label('Component')
                    ->required(),
                Forms\Components\TextInput::make('item')
                    ->label('Item')
                    ->required(),
                Forms\Components\Select::make('type')
                    ->label('Type')
                    ->options([
                        'text/text' => 'text/text',
                        'text/html' => 'text/html',
                    ])
                    ->required(),
                Forms\Components\TextArea::make('content')
                    ->label('Content')
                    ->columnSpan('full')
                    ->rows(20)
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('page')->label('Page'),
                Tables\Columns\TextColumn::make('component')->label('Component'),
                Tables\Columns\TextColumn::make('item')->label('Item'),
                Tables\Columns\TextColumn::make('content')->label('Content')->limit(50),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCmsContents::route('/'),
            'create' => Pages\CreateCmsContent::route('/create'),
            'edit' => Pages\EditCmsContent::route('/{record}/edit'),
        ];
    }
}
