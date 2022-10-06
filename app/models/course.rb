class Course < ApplicationRecord
    has_many :signups
    has_many :employees, through: :signups
end
