# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding database...'

skill_names = ["SQL","Java","JavaScript","Perl","Python", "C#"]
promotion_names = ["Junior Developer","Senior Developer","Data Center Tech II","Internet Analyst","Cybersecurity Specialist","Senior Software Engineer"]

Employee.create!(FirstName: "John", LastName: "Davis", Email: "johndavis@gmail.com", Phone: "334-092-9008", HireDate: 2010-09-07, Salary: 84000)
Employee.create!(FirstName: "Melissa", LastName: "Starks", Email: "mellissastarks@gmail.com", Phone: "908-334-0090", HireDate: 2015-07-09, Salary: 74000)
Employee.create!(FirstName: "Melvin", LastName: "Lewis", Email: "melvinlewis@gmail.com", Phone: "805-009-4456", HireDate: 2019-02-09, Salary: 80000)

Employee.all.each do |employee|
    3.times do
      Skill.create(Description: skill_names.sample)

Employee.all.each do |employee|
    3.times do
      Promotion.create(JobName: skill_names.sample, EmployeeID: employee.id)

#foreign keys for many to many relationship
Employee_Skill.create(
    EmployeeID: employee.id,
    SkillID: skill.id
  )

puts 'Done seeding!
