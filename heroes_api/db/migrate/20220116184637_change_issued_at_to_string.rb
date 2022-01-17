class ChangeIssuedAtToString < ActiveRecord::Migration[6.1]
  def change
    remove_column :badges, :issued_at
    add_column :badges, :issued_at, :string
  end
end
