defmodule Vitepad.Repo.Migrations.CreateDocuments do
  use Ecto.Migration

  def change do
    create table(:documents) do
      add :name, :string
      add :content, :text

      timestamps()
    end
  end
end
