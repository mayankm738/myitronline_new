/**
 * Single place where `import.meta.env` is read.
 *
 * Keeping env access here means the rest of the app imports plain values, and
 * a missing variable fails loudly at startup instead of surfacing as a vague
 * network error later on.
 */

function required(key) {
  const value = import.meta.env[key]

  if (value === undefined || value === '') {
    throw new Error(
      `Missing required environment variable "${key}". ` +
        'Copy frontend/.env.example to frontend/.env and restart the dev server.',
    )
  }

  return value
}

export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'MyITRonline',
  apiBaseUrl: required('VITE_API_BASE_URL'),
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
  isDev: import.meta.env.DEV,
}
