class EmployeesController < ApplicationController
  skip_before_action :authorize, only: :create
 
  # displays all the employees with courses and signups from the database
  # returns a JSON response with an array of all the employees with courses and signups
  def index
    render json: Employee.all, include: [:courses, :signups]
  end

  # adds the employee to the database
  # sends a JSON-formatted response of the employee data
  def create
    employee = Employee.create!(employee_params)
    render json: employee, status: :created
  end
  
  # finds the employee in the database using the ID
  # updates the employee to the database
  def update
    employee = Employee.find_by(id: params[:id])
    employee.update!(employee_params)
      render json: employee
  end

  # finds the employee in the database using the ID
  # deletes the employee from the database
  def destroy
    employee = Employee.find(params[:id])
    employee.destroy
    render json: employee  
  end

private

  def employee_params
    params.permit(:name, :email, :occupation, :salary)

  end

end
