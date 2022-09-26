# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding database..."

skill_names = ["SQL","Java","JavaScript","Perl","Python", "C#"]
promotion_names = ["Junior Developer","Senior Developer","Data Center Tech II","Internet Analyst","Cybersecurity Specialist","Senior Software Engineer"]

Employee.create!(FirstName: "John", LastName: "Davis", Email: "johndavis@gmail.com", Phone: "334-092-9008", HireDate: "07-09-2010", Salary: 84000)
Employee.create!(FirstName: "Melissa", LastName: "Starks", Email: "mellissastarks@gmail.com", Phone: "908-334-0090", HireDate: "07-09-2015", Salary: 74000)
Employee.create!(FirstName: "Melvin", LastName: "Lewis", Email: "melvinlewis@gmail.com", Phone: "805-009-4456", HireDate: "02-09-2019", Salary: 80000)
Employee.create!(FirstName: "Michelle", LastName: "Gordon", Email: "michellegordon@gmail.com", Phone: "406-444-3090", HireDate: "06-02-2005", Salary: 84000)
Employee.create!(FirstName: "Jesse", LastName: "Williams", Email: "jessiewilliams@gail.com", Phone: "630-309-4420", HireDate: "09-04-2015", Salary: 95000)
Employee.create!(FirstName: "Mark", LastName: "Johnson", Email: "markjohnson@gmail.com", Phone: "605-333-0045", HireDate: "04-16-2010", Salary: 92000)

Employee.all.each do |employee|
    3.times do
      Skill.create(Description: skill_names.sample)     
    end
end

Employee.all.each do |employee|
    3.times do
      Promotion.create(JobName: promotion_names.sample, EmployeeID: employee.id)
    end
end

#foreign keys for many to many relationship
#EmployeeSkill.create(EmployeeID: employee.id, SkillID: skill.id)

puts "Done seeding!"
