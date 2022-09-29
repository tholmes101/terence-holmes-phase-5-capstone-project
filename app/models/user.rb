class User < ApplicationRecord
    has_secure_password
    has_many :signups
    has_many :courses, through: :signups
    has_many :skills
end
