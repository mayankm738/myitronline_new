import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <header className="page-header">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lede">
          React Router matched no route for this URL — which is exactly what should happen
          for an unknown path.
        </p>
      </header>

      <nav className="crumbs">
        <Link to="/">← Back to the stack check</Link>
      </nav>
    </>
  )
}
