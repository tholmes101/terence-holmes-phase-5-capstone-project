class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :skill
      t.integer :employee_id

      t.timestamps
    end
  end
end
