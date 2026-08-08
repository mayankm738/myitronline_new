import axios from 'axios'

import { env } from '@/config/env'

/**
 * Shared Axios instance for every call to the Laravel API.
 *
 * Import this rather than calling axios directly so base URL, timeout and
 * error shape stay consistent across the app.
 */
export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: env.apiTimeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Makes Laravel treat the request as AJAX and return JSON on errors.
    'X-Requested-With': 'XMLHttpRequest',
  },
})

/**
 * Normalises every failure into one predictable shape, so callers never have to
 * guess between `error.response`, `error.request` and plain runtime errors.
 */
export class ApiError extends Error {
  constructor(message, { status = null, data = null, cause = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
    this.cause = cause
  }
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with a non-2xx status.
      const { status, data } = error.response

      return Promise.reject(
        new ApiError(data?.message ?? `Request failed with status ${status}.`, {
          status,
          data,
          cause: error,
        }),
      )
    }

    if (error.request) {
      // Request left the browser but nothing came back: server down, DNS, CORS.
      return Promise.reject(
        new ApiError(
          'No response from the API. Check that the Laravel server is running and reachable.',
          { cause: error },
        ),
      )
    }

    return Promise.reject(new ApiError(error.message, { cause: error }))
  },
)
