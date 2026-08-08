import { apiClient } from '@/lib/apiClient'

/**
 * Calls GET /api/health and returns the payload.
 *
 * One module per API area keeps components free of endpoint strings.
 */
export async function fetchHealth() {
  const { data } = await apiClient.get('/health')

  return data
}
