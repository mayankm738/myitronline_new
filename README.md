# MyITRonline — Website Redesign

Project foundation for the MyITRonline redesign. This repository currently contains
**only the scaffolding and development environment** — no pages, modules, or UI design
have been built yet.

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | React 19 + Vite 8                 |
| Backend  | Laravel 13 (REST API)             |
| Database | MySQL / MariaDB                   |
| HTTP     | Axios                             |
| Routing  | React Router 7                    |

---

## Repository layout

```
myitronline_new/
├── backend/                  Laravel 13 REST API
│   ├── app/
│   │   ├── Enums/            Enumerations
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   └── Api/      API controllers (HealthController lives here)
│   │   │   ├── Middleware/
│   │   │   ├── Requests/     Form request validation
│   │   │   └── Resources/    API response transformers
│   │   ├── Models/
│   │   └── Services/         Business logic, kept out of controllers
│   ├── config/cors.php       Cross-origin rules for the SPA
│   ├── routes/api.php        API routes (auto-prefixed with /api)
│   └── tests/Feature/Api/    API feature tests
│
└── frontend/                 React + Vite SPA
    └── src/
        ├── components/       Reusable presentational components
        ├── config/env.js     Single point of env-var access
        ├── context/          React context providers
        ├── hooks/            Custom hooks
        ├── layouts/          Route shells
        ├── lib/apiClient.js  Configured Axios instance
        ├── pages/            Route-level components
        ├── routes/           Route table
        ├── services/         One module per API area
        └── utils/            Pure helpers
```

---

## Prerequisites

| Tool           | Version required | Notes                                                          |
| -------------- | ---------------- | -------------------------------------------------------------- |
| PHP            | **8.3+**         | Installed at `C:\php84` (8.4.24). See note below.               |
| Composer       | 2.x              | Already installed at `C:\composer`.                             |
| Node.js        | 20+              | Currently 24.0.2.                                               |
| MySQL / MariaDB| 10.4+            | Provided by XAMPP; start it from the XAMPP control panel.       |

> **Why a separate PHP install?**
> Laravel 13 requires PHP `^8.3`, but both XAMPP installs on this machine ship PHP 8.2.12.
> A standalone PHP 8.4.24 was installed at `C:\php84` for this project. **XAMPP was not
> modified** — its Apache and PHP are untouched, so existing hosted sites still run on 8.2.
>
> On this machine `php` and `composer` already resolve to 8.4.24 in any new PowerShell
> terminal. That is done by `Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`,
> which moves `C:\php84` to the front of `PATH` at shell startup — necessary because
> `C:\xampp8.2\php` lives in the *machine-scope* `PATH`, which Windows searches before the
> user scope, so a normal user-scope `PATH` entry cannot override it.
>
> ```powershell
> php -v        # should print 8.4.24
> ```
>
> On a machine without that profile, call PHP by full path instead
> (`C:\php84\php.exe artisan ...`), or prepend it for the current terminal only:
>
> ```powershell
> $env:Path = "C:\php84;$env:Path"
> ```

---

## Setting up on a new machine

`vendor/`, `node_modules/` and all `.env` files are intentionally **not** in git, so a
fresh clone needs four things installed and four things generated. Full sequence:

```powershell
# 1. Clone
git clone https://github.com/mayankm738/myitronline_new.git
cd myitronline_new

# 2. Backend dependencies (creates vendor/, ~80 packages)
cd backend
composer install

# 3. Backend environment
Copy-Item .env.example .env
php artisan key:generate            # .env.example ships an empty APP_KEY on purpose

# 4. Create the database, then migrate
#    In phpMyAdmin / MySQL client:
#      CREATE DATABASE myitronline_new CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
php artisan migrate

# 5. Frontend dependencies and environment
cd ../frontend
npm install
Copy-Item .env.example .env
```

Then start both servers (each in its own terminal) and open
**http://127.0.0.1:5173**:

```powershell
cd backend;  php artisan serve --host=127.0.0.1 --port=5555
cd frontend; npm run dev
```

On macOS or Linux, replace `Copy-Item .env.example .env` with `cp .env.example .env`.

**Things that trip people up on a fresh clone**

| Symptom | Cause |
| ------- | ----- |
| `Could not open input file: artisan` | You are in the repo root; `artisan` lives in `backend/`. |
| `No application encryption key has been specified` | Skipped `php artisan key:generate`. |
| `SQLSTATE[HY000] [1049] Unknown database` | The database was never created (step 4). |
| `Your Composer dependencies require a PHP version >= 8.3` | PHP is older than 8.3 — see Prerequisites. |
| Frontend loads but health check fails | Laravel is not running, or `API_PROXY_TARGET` points at the wrong port. |
| `Missing required environment variable "VITE_API_BASE_URL"` | Skipped copying `frontend/.env.example`. |

---

## Backend setup (Laravel API)

```powershell
cd backend

# 1. Install PHP dependencies
composer install

# 2. Create your local env file
Copy-Item .env.example .env

# 3. Generate the application key
php artisan key:generate

# 4. Create the database (once) - via phpMyAdmin, or:
#    CREATE DATABASE myitronline_new CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# 5. Run migrations
php artisan migrate

# 6. Start the API
php artisan serve --host=127.0.0.1 --port=5555
```

The API is then available at **http://127.0.0.1:5555**.

### Backend environment variables

| Variable        | Default                                              | Purpose                                          |
| --------------- | ---------------------------------------------------- | ------------------------------------------------ |
| `APP_URL`       | `http://127.0.0.1:5555`                              | Base URL of the API.                             |
| `FRONTEND_URL`  | `http://localhost:5173,http://127.0.0.1:5173`        | Comma-separated CORS allow-list.                 |
| `DB_CONNECTION` | `mariadb`                                            | XAMPP ships MariaDB. Use `mysql` for real MySQL. |
| `DB_DATABASE`   | `myitronline_new`                                    | Dedicated redesign database.                     |
| `DB_USERNAME`   | `root`                                               | XAMPP default.                                   |
| `DB_PASSWORD`   | *(empty)*                                            | XAMPP default.                                   |

---

## Frontend setup (React + Vite)

```powershell
cd frontend

# 1. Install dependencies
npm install

# 2. Create your local env file
Copy-Item .env.example .env

# 3. Start the dev server
npm run dev
```

The SPA is then available at **http://127.0.0.1:5173**.

### Frontend environment variables

Only variables prefixed with `VITE_` reach the browser bundle — never put secrets in them.

| Variable            | Default                     | Purpose                                             |
| ------------------- | --------------------------- | --------------------------------------------------- |
| `VITE_API_BASE_URL` | `/api`                      | API base path. Relative, so it goes via the proxy.  |
| `API_PROXY_TARGET`  | `http://127.0.0.1:5555`     | Where Vite forwards `/api`. Server-side only.       |
| `VITE_API_TIMEOUT`  | `15000`                     | Axios timeout in milliseconds.                      |
| `VITE_APP_NAME`     | `MyITRonline`               | Display name.                                       |

`API_PROXY_TARGET` has no `VITE_` prefix on purpose — it is read by `vite.config.js` at
dev-server startup and never reaches the browser bundle.

### Frontend scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start the Vite dev server on port 5173. |
| `npm run build`   | Production build into `dist/`.          |
| `npm run preview` | Serve the production build locally.     |
| `npm run lint`    | Run oxlint.                             |

---

## Running the full stack

Start MySQL from the XAMPP control panel, then run each command in its own terminal:

```powershell
# Terminal 1 — API
cd backend; php artisan serve --host=127.0.0.1 --port=5555

# Terminal 2 — SPA
cd frontend; npm run dev
```

Then open **http://127.0.0.1:5173** — that is the only URL you visit in the browser.

The placeholder home page calls the health endpoint and shows the API and database status.
It exists purely to prove the stack is wired up, and should be replaced when real design
work begins.

### How API calls are routed

Vite proxies everything under `/api` to Laravel, so the browser only ever talks to one
origin and CORS never applies during development:

```
browser ──▶ http://127.0.0.1:5173          (Vite: React app)
                    │
                    └── /api/* ──▶ http://127.0.0.1:5555   (Laravel: REST API)
```

Port 5555 is still directly reachable for `curl`, Postman, or a mobile client — the proxy
is a convenience, not a restriction. Because requests are same-origin, React calls the
relative path `/api/health` rather than a full URL, which also means no code change is
needed when the API moves to its own domain in production; only `VITE_API_BASE_URL` does.

---

## Health check endpoint

```
GET /api/health
```

Returns `200` when the API and database are both reachable, and `503` when the database
is not — so uptime monitors and container probes can rely on the status code alone.

```bash
curl http://127.0.0.1:5555/api/health
```

```json
{
  "status": "ok",
  "app": "MyITRonline API",
  "environment": "local",
  "version": "13.24.0",
  "timestamp": "2026-08-08T07:10:40+00:00",
  "services": {
    "database": {
      "status": "ok",
      "connection": "mariadb",
      "driver": "mariadb",
      "database": "myitronline_new",
      "response_time_ms": 32.46
    }
  }
}
```

Laravel also exposes its built-in probe at `GET /up`.

---

## Tests

```powershell
cd backend
php artisan test
```

Tests run against an in-memory SQLite database (see `phpunit.xml`), so they never touch
your MySQL data.

---

## Conventions

**Adding an API endpoint**

1. Create a controller in `backend/app/Http/Controllers/Api/`.
2. Register the route in `backend/routes/api.php` under the `v1` prefix group.
3. Put validation in `app/Http/Requests/`, response shaping in `app/Http/Resources/`,
   and business logic in `app/Services/` — keep controllers thin.

**Calling it from React**

1. Add a function to a module in `frontend/src/services/`, using the shared
   `apiClient` from `@/lib/apiClient` — never import `axios` directly, or you lose the
   base URL, timeout and error normalisation.
2. `@/` is an alias for `frontend/src/`, so use `@/services/...` rather than `../../`.
3. Errors arrive as `ApiError` with `.status`, `.data` and `.message` already normalised.

---

## Notes

- **The legacy `myitronline` database is a separate, live database** containing the
  current production data. This project deliberately uses its own `myitronline_new`
  database. Do not point local migrations at the legacy schema.
- CORS is driven entirely by `FRONTEND_URL`; add an origin there rather than editing
  `config/cors.php` when deploying.
- `supports_credentials` is `false`. Turn it on only if you move to cookie-based
  (Sanctum SPA) authentication.
- Vite is pinned to `127.0.0.1` with `strictPort: true`, because the default binding
  resolves to IPv6-only loopback on some Windows setups and a silent port change would
  break the CORS allow-list.
