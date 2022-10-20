class Employee < ApplicationRecord
    has_many :signups
    has_many :courses, through: :signups

    validates :name, :email, :occupation, presence: true, uniqueness: true
    validates :salary, numericality: true, presence: true
end
