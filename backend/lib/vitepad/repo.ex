defmodule Vitepad.Repo do
  use Ecto.Repo,
    otp_app: :vitepad,
    adapter: Ecto.Adapters.Postgres
end
