# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding employees..."
employee1 = Employee.create(name: 'Tony Smith', email:'tsmith@gmail.com', occupation: 'IT Operator', salary: 56000)
employee2 = Employee.create(name: 'Linda Jones', email: 'ljones@gmail.com', occupation: 'Jr Tech Support', salary: 53000)
employee3 = Employee.create(name: 'Tim Arnold', email: 'tarnold@gmail.com', occupation: 'Help Desk', salary: 30000)

puts "Seeding courses..."
course1 = Course.create(description: 'Software Development', employee_id: employee2.id)
course2 = Course.create(description: 'Software Engineering', employee_id: employee1.id)
course3 = Course.create(description: 'Cybersecurity', employee_id: employee3.id)

puts "Seeding signups..."
Signup.create(employee_id: employee1.id, course_id: course2.id, time: 11)
Signup.create(employee_id: employee2.id, course_id: course1.id, time: 12)
Signup.create(employee_id: employee3.id, course_id: course3.id, time: 15)


puts "✅ Done seeding!"