class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :title
      t.float :price
      t.string :description
      t.string :image
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
