class Employee < ApplicationRecord
    has_many :signups
    has_many :courses, through: :signups
    has_many :skills
end
