<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Controls which browser origins may call this API. Origins are read from
    | the FRONTEND_URL environment variable so each environment (local, staging,
    | production) can allow its own frontend without a code change.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => array_values(array_filter(
        array_map('trim', explode(',', (string) env('FRONTEND_URL', 'http://localhost:5173')))
    )),

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // Enable only if you move to cookie-based (Sanctum SPA) authentication.
    'supports_credentials' => false,

];
