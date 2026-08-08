<?php

use App\Http\Controllers\Api\HealthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Routes here are automatically prefixed with "/api" (see bootstrap/app.php).
| Group future feature routes under a version prefix so the public contract
| can evolve without breaking existing clients.
|
*/

Route::get('/health', HealthController::class)->name('api.health');

Route::prefix('v1')->name('api.v1.')->group(function () {
    // Feature routes go here, e.g.:
    // Route::apiResource('clients', ClientController::class);
});
