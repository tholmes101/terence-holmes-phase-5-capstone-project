import { getEmployees, delEmployee } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

function EmployeeList() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.emps);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(delEmployee({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Holmes Corp. Employee App</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <button
            onClick={() => dispatch(getEmployees())}
            className="button-primary"
          >
            Load Employees
          </button>
        </div>
        <div className="three columns">
          <Link to="/add-employee">
            <button className="button-primary">Add Employees</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Occupation</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length &&
                data.map(({ id, name, email, occupation, salary }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{occupation}</td>
                    <td>{salary}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-employee/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default EmployeeList;