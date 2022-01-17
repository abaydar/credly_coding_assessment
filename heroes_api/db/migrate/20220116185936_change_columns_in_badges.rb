class ChangeColumnsInBadges < ActiveRecord::Migration[6.1]
  def change
    remove_column :badges, :recipient_first_name
    remove_column :badges, :recipient_last_name
    add_column :badges, :issued_to_first_name, :string
    add_column :badges, :issued_to_last_name, :string
  end
end
