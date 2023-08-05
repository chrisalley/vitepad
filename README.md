# Vitepad

A document editor built using React and Phoenix.

## Prerequisties:

- Git
- Node.js
- Elixir
- Postgres

## Setup Instructions

1. Clone the repo and change into the directory:

   `git clone git@github.com:chrisalley/vitepad.git`

   `cd vitepad`

2. Install backend dependencies:

   `cd backend`

   `mix deps.get`

3. Create the database:

   `mix ecto.create`

   `mix ecto.migrate`

4. Start the backend:

   `mix phx.server`

5. Confirm that the Phoenix app is running at `http://localhost:4000`

6. Install frontend dependencies:

   `cd frontend`

   `pnpm install`

7. Start the frontend:

   `pnpm dev`

8. Confirm that the React app is running at `http://localhost:5173`
