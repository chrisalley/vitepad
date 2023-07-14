defmodule Vitepad.DocumentsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Vitepad.Documents` context.
  """

  @doc """
  Generate a document.
  """
  def document_fixture(attrs \\ %{}) do
    {:ok, document} =
      attrs
      |> Enum.into(%{
        name: "some name",
        content: "some content"
      })
      |> Vitepad.Documents.create_document()

    document
  end
end
