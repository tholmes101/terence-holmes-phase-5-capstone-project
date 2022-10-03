# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding users..."
user1 = User.create(name: 'Tony Smith', password: '******', email:'tsmith@gmail.com', occupation: 'IT Operator', salary: 56000)
user2 = User.create(name: 'Linda Jones', password: '******', email: 'ljones@gmail.com', occupation: 'Jr Tech Support', salary: 53000)
user3 = User.create(name: 'Tim Arnold', password: '******', email: 'tarnold@gmail.com', occupation: 'Help Desk', salary: 30000)

puts "Seeding courses..."
course1 = Course.create(description: 'Software Development')
course2 = Course.create(description: 'Software Engineering')
course3 = Course.create(description: 'Cybersecurity')

puts "Seeding signups..."
Signup.create(user_id: user1.id, course_id: course2.id, time: 11)
Signup.create(user_id: user1.id, course_id: course1.id, time: 12)
Signup.create(user_id: user1.id, course_id: course3.id, time: 15)

puts "Seeding skills"
skill_names = ["SQL","Java","JavaScript","Perl","Python", "C#"]
User.all.each do |user|
  3.times do
    Skill.create(skill: skill_names.sample, user_id: user.id)
  end
end

puts "✅ Done seeding!"
