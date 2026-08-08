import { useCallback, useEffect, useState } from 'react'

import { fetchHealth } from '@/services/healthService'

/**
 * Loads the API health payload and exposes a manual `refresh` trigger.
 *
 * Status is one of: 'loading' | 'success' | 'error'.
 */
export function useHealthCheck() {
  const [status, setStatus] = useState('loading')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const load = useCallback(async (signal) => {
    setStatus('loading')
    setError(null)

    try {
      const payload = await fetchHealth()

      if (signal?.aborted) return

      setData(payload)
      setStatus('success')
    } catch (err) {
      if (signal?.aborted) return

      setError(err)
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    load(controller.signal)

    return () => controller.abort()
  }, [load])

  return { status, data, error, refresh: () => load() }
}
