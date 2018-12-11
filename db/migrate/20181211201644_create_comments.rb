class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :image_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :image_id
  end
end
