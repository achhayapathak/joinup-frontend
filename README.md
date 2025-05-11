# joinup-frontend

Modern React frontend for JoinUp, built with Vite, Chakra UI, Tailwind, and React Query.

## Features

- React 19, Vite, Chakra UI, TailwindCSS
- React Query for data fetching/caching
- Axios with auto token refresh
- Routing via React Router v7
- Theming with next-themes
- Dev, build, preview, and lint scripts

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Set backend URL

Create a `.env` file in the project root:

```env
VITE_API_URL=https://your-backend-url.com/api
```

- This is used in `src/config/apiClient.js` for all API requests.
- The app expects the backend to support CORS and `/auth/refresh` for token refresh.

### 3. Run the app

```sh
npm run dev
```

- App runs on [http://localhost:5173](http://localhost:5173) by default.

### 4. Build for production

```sh
npm run build
```

### 5. Preview production build

```sh
npm run preview
```

### 6. Lint

```sh
npm run lint
```

## Environment Variables

- `VITE_API_URL` — **required**. Base URL for backend API.

## Backend Connection

- All API calls use `VITE_API_URL` as the base.
- Auth tokens are refreshed automatically on 401 errors (see `src/config/apiClient.js`).
- If refresh fails, user is redirected to `/login`.

## Tech Stack

- React 19
- Vite
- Chakra UI
- TailwindCSS
- React Query
- Axios
- React Router v7

## Folder Structure

- `src/components/` — UI components
- `src/pages/` — Page components (if using file-based routing)
- `src/config/` — API client and query client setup
- `src/hooks/` — Custom hooks
- `src/lib/` — Utilities/libs

---


