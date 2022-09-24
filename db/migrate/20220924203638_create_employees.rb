class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :FirstName
      t.string :LastName
      t.string :Email
      t.string :Phone
      t.date :HireDate
      t.float :Salary

      t.timestamps
    end
  end
end
