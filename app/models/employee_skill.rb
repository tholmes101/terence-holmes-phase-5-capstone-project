class EmployeeSkill < ApplicationRecord
    belong_to :employee
    belong_to :skill
end