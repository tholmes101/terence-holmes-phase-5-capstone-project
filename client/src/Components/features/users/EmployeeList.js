import { getEmployees, destroyEmployee } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./styles";
import styled from "styled-components";
import "./styles/styles.css"

// Displays the employee home page
// Creates a table with buttons to load, edit, and delete employees
function EmployeeList() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.employees);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(destroyEmployee({ id }));
  };

  return (
    <Wrapper>
    <div className="container">
      <div className="row">
        <h2>Naval Tech Solutions Employees</h2>
      </div>
      <div className="row">
        <div className="three columns">
          <Button
            onClick={() => dispatch(getEmployees())}
            className="button-primary"
          >
            Load Employees
          </Button>
        </div>
        <div className="three columns">
          <Link to="/add-employee">
            <Button className="button-primary">Add Employees</Button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="table">
            <thead className="thead">
              <tr className="trHead">
                <th >name</th>
                <th >email</th>
                <th >occupation</th>
                <th >salary</th>
                <th >actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {data.length &&
                data.map(({id, name, email, occupation, salary}, index) => (
                  <tr className="trBody" key={index}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{occupation}</td>
                    <td>{salary}</td>
                    <td>
                      <Button onClick={() => handleDelete(id)}>Delete</Button>
                      <Link to={`/edit-employee/${id}`}>
                        <Button>Edit</Button>
                      </Link>
                    </td>
                   
                  </tr>
                  ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default EmployeeList;