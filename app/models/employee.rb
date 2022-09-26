class Employee < ApplicationRecord
    has_many :employee_skills
    has_many :skills, through: :employee_skills
    has_many :promotions
end
