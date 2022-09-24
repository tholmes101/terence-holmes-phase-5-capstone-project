class CreateEmployeeSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :employee_skills do |t|
      t.integer :EmployeeID
      t.integer :SkillID

      t.timestamps
    end
  end
end
