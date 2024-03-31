<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    protected function initializeSentry()
    {
        \Sentry\init([
            'dsn' => config('SENTRY_LARAVEL_DSN', env('SENTRY_LARAVEL_DSN')),
            // Specify a fixed sample rate
            'traces_sample_rate' => config('SENTRY_TRACES_SAMPLE_RATE', 1.0),
            // Set a sampling rate for profiling - this is relative to traces_sample_rate
            'profiles_sample_rate' => 1.0,
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('viewPulse', function (User $user) {
            return $user->isAdmin();
        });
    }
}
