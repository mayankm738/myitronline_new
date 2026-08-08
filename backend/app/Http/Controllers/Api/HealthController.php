<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Throwable;

class HealthController extends Controller
{
    /**
     * Report API liveness plus the status of its backing services.
     *
     * Returns 200 when everything is reachable and 503 when any dependency
     * is down, so uptime checks and container probes can rely on the status code.
     */
    public function __invoke(): JsonResponse
    {
        $database = $this->databaseStatus();

        $healthy = $database['status'] === 'ok';

        return response()->json([
            'status' => $healthy ? 'ok' : 'degraded',
            'app' => config('app.name'),
            'environment' => config('app.env'),
            'version' => app()->version(),
            'timestamp' => now()->toIso8601String(),
            'services' => [
                'database' => $database,
            ],
        ], $healthy ? 200 : 503);
    }

    /**
     * Ping the configured database connection and measure the round trip.
     *
     * @return array<string, mixed>
     */
    private function databaseStatus(): array
    {
        $connection = config('database.default');
        $startedAt = microtime(true);

        try {
            DB::connection()->select('select 1');

            return [
                'status' => 'ok',
                'connection' => $connection,
                'driver' => DB::connection()->getDriverName(),
                'database' => DB::connection()->getDatabaseName(),
                'response_time_ms' => round((microtime(true) - $startedAt) * 1000, 2),
            ];
        } catch (Throwable $e) {
            report($e);

            return [
                'status' => 'error',
                'connection' => $connection,
                // Never leak credentials or DSN details to an unauthenticated endpoint.
                'message' => app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Unable to reach the database.',
            ];
        }
    }
}
