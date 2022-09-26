class EmployeesController < ApplicationController

    # GET /employees
  def index
    employees = Employee.all
    render json: employees
  end

  # GET /employees/:id
  def show
    employee = Employee.find_by(id: params[:id])
    render json: employee
  end

  def create
    employee = Employee.create(employee_params)
    render json: bird, status: :created
  end

  def update
    employee = Employee.find_by(id: params[:id])
    employee.update(employee_params)
    render json: employee
  end

  def destroy
    employee = Employee.find_by(id: params[:id])
    employee.destroy
    head :no_content
  end

  private

  def employee_params
    params.permit(:FirstName, :LastNwme, :Email, :Phone, :HireDate, :Salary)
  end

end
