class Employee < ApplicationRecord
    has_many :signups
    has_many :courses, through: :signups
    #belongs_to :user
end
