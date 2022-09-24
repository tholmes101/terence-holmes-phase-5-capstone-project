class CreatePromotions < ActiveRecord::Migration[6.1]
  def change
    create_table :promotions do |t|
      t.string :JobName
      t.integer :EmployeeID

      t.timestamps
    end
  end
end
