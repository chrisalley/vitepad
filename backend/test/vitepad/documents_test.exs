defmodule Vitepad.DocumentsTest do
  use Vitepad.DataCase

  alias Vitepad.Documents

  describe "documents" do
    alias Vitepad.Documents.Document

    import Vitepad.DocumentsFixtures

    @invalid_attrs %{name: nil, content: nil}

    test "list_documents/0 returns all documents" do
      document = document_fixture()
      assert Documents.list_documents() == [document]
    end

    test "get_document!/1 returns the document with given id" do
      document = document_fixture()
      assert Documents.get_document!(document.id) == document
    end

    test "create_document/1 with valid data creates a document" do
      valid_attrs = %{name: "some name", content: "some content"}

      assert {:ok, %Document{} = document} = Documents.create_document(valid_attrs)
      assert document.name == "some name"
      assert document.content == "some content"
    end

    test "create_document/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Documents.create_document(@invalid_attrs)
    end

    test "update_document/2 with valid data updates the document" do
      document = document_fixture()
      update_attrs = %{name: "some updated name", content: "some updated content"}

      assert {:ok, %Document{} = document} = Documents.update_document(document, update_attrs)
      assert document.name == "some updated name"
      assert document.content == "some updated content"
    end

    test "update_document/2 with invalid data returns error changeset" do
      document = document_fixture()
      assert {:error, %Ecto.Changeset{}} = Documents.update_document(document, @invalid_attrs)
      assert document == Documents.get_document!(document.id)
    end

    test "delete_document/1 deletes the document" do
      document = document_fixture()
      assert {:ok, %Document{}} = Documents.delete_document(document)
      assert_raise Ecto.NoResultsError, fn -> Documents.get_document!(document.id) end
    end

    test "change_document/1 returns a document changeset" do
      document = document_fixture()
      assert %Ecto.Changeset{} = Documents.change_document(document)
    end
  end
end
