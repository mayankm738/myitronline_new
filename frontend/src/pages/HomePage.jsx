import { useState } from 'react'
import { Link } from 'react-router-dom'

import StackCard from '@/components/StackCard'
import StatusBadge from '@/components/StatusBadge'
import { env } from '@/config/env'
import { useHealthCheck } from '@/hooks/useHealthCheck'

/**
 * Scaffold landing page.
 *
 * Exists to prove the React -> Axios -> Laravel -> MySQL chain works end to end,
 * and that routing, state and hot reload are wired up. This is deliberately not
 * the MyITRonline design - replace it entirely when design work begins.
 */
export default function HomePage() {
  const { status, data, error, refresh } = useHealthCheck()
  const [count, setCount] = useState(0)

  const db = data?.services?.database

  return (
    <>
      <header className="page-header">
        <span className="eyebrow">Project foundation</span>
        <h1>{env.appName} — stack check</h1>
        <p className="lede">
          Scaffolding only. No website pages or modules have been built yet — this page
          just confirms every layer is talking to the next one.
        </p>
      </header>

      <h2>Technology</h2>
      <div className="card-grid">
        <StackCard label="Frontend" value="React 19" meta="Vite 8 · React Router 7" />
        <StackCard label="Backend" value="Laravel 13" meta={data ? `v${data.version}` : 'REST API'} />
        <StackCard
          label="Database"
          value={db?.driver ? db.driver : 'MySQL / MariaDB'}
          meta={db?.database ?? 'via PDO'}
        />
      </div>

      <h2>Live API health check</h2>
      <div className="card">
        <div className="panel-head">
          <div>
            <p className="card-label">GET {env.apiBaseUrl}/health</p>
            <p className="card-meta">Called through the shared Axios client on mount.</p>
          </div>
          <StatusBadge
            tone={status === 'success' ? 'ok' : status === 'error' ? 'error' : 'loading'}
          />
        </div>

        {status === 'error' && (
          <div role="alert">
            <p>{error?.message}</p>
            <p className="card-meta">
              Start the Laravel API with <code>php artisan serve</code> and check that
              Vite&apos;s <code>API_PROXY_TARGET</code> points at it, then retry.
            </p>
          </div>
        )}

        {status === 'success' && (
          <>
            <dl className="kv-list">
              <dt>API</dt>
              <dd>{data.status}</dd>
              <dt>Environment</dt>
              <dd>{data.environment}</dd>
              <dt>Database</dt>
              <dd>
                {db?.status} · {db?.database} ({db?.driver})
              </dd>
              <dt>Round trip</dt>
              <dd>{db?.response_time_ms} ms</dd>
            </dl>

            <details>
              <summary>Raw response</summary>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </details>
          </>
        )}

        <div className="button-row" style={{ marginTop: '1.25rem' }}>
          <button type="button" onClick={refresh} disabled={status === 'loading'}>
            Re-run health check
          </button>
        </div>
      </div>

      <h2>React sanity checks</h2>
      <div className="card">
        <div className="button-row">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <span className="card-meta">
            State updates — confirms React rendering and hot reload.
          </span>
        </div>

        <div className="button-row" style={{ marginTop: '1rem' }}>
          <Link to="/no-such-page">Visit an unknown route</Link>
          <span className="card-meta">Should render the 404 page via React Router.</span>
        </div>
      </div>

      <p className="note">
        Edit <code>src/pages/HomePage.jsx</code> and the page updates instantly via Vite HMR.
      </p>
    </>
  )
}
