class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.string :name
      t.integer :user_id
      t.string :recipient_email
      t.string :recipient_first_name
      t.string :recipient_last_name
      t.string :badge_template_id
      t.date :issued_at

      t.timestamps
    end
  end
end
