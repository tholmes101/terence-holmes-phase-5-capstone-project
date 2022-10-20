class EmployeesController < ApplicationController
  skip_before_action :authorize, only: :create
 
  def index
    render json: Employee.all, include: [:courses, :signups]
  end

  def create
    employee = Employee.create!(employee_params)
    render json: employee, status: :created
  end

  def update
    employee = Employee.find_by(id: params[:id])
    employee.update!(employee_params)
      render json: employee
  end

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
