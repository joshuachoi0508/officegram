class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :image_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, [:user_id, :image_id], unique: true
  end
end
