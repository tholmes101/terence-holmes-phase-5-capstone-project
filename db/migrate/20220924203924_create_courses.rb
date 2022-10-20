class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :description
      t.integer :employee_id
    end
  end
end
