class Signup < ApplicationRecord
    belongs_to :employee
    belongs_to :course
end