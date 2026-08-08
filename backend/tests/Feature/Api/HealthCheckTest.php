<?php

namespace Tests\Feature\Api;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    public function test_health_endpoint_reports_ok_with_a_reachable_database(): void
    {
        $response = $this->getJson('/api/health');

        $response->assertOk()
            ->assertJsonPath('status', 'ok')
            ->assertJsonPath('services.database.status', 'ok')
            ->assertJsonStructure([
                'status',
                'app',
                'environment',
                'version',
                'timestamp',
                'services' => [
                    'database' => ['status', 'connection', 'driver', 'database'],
                ],
            ]);
    }
}
