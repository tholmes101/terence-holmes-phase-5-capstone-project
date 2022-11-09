import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

// Redux function - Displays a list of employess provided by the JSON backend data
export const getEmployees = createAsyncThunk("employees/getEmployees", async () => {
  const response = await fetch("/employees");
  const data = await response.json();
  console.log(data);
  return data;
});

// Redux function - Deletes an employee from the JSON backend data
export const destroyEmployee = createAsyncThunk("users/deleteUser", async (employee) => {
  const configuration = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`/employees/${employee.id}`, configuration);
  const data = await response.json();
  return data;
});

// Redux function - Adds a new employee to the JSON backend data 
export const postEmployee = createAsyncThunk("employees/postEmployee", async (employee) => {
  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  };
  const response = await fetch("/employees", configuration);
  const data = await response.json();
  return data;
});

// Redux function - Updates an employee to the JSON backend data
export const changeEmployee = createAsyncThunk("users/changeEmployee", async (employee) => {
  const configuration = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  };
  const response = await fetch(`/employees/${employee.id}`, configuration);
  const data = await response.json();
  return data;
});

// Reducers for create, add, update on delete employees
const userSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { id, name, email, occupation, salary } = action.payload;
      const existingEmployee = state.data.find((employee) => employee.id === id);
      if (existingEmployee) {
        existingEmployee.name = name;
        existingEmployee.email = email;
        existingEmployee.occupation = occupation;
        existingEmployee.salary = salary;
      };
    },
    deleteEmployee: (state, action) => {
      state.data = state.data.filter((employee) => employee.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getEmployees.rejected]: (state) => {
      state.loading = false;
    },
    [destroyEmployee.pending]: (state) => {
      state.loading = true;
    },
    [destroyEmployee.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.filter((employee) => employee.id !== action.payload.id);
    },
    [destroyEmployee.rejected]: (state) => {
      state.loading = false;
    },
    [postEmployee.pending]: (state) => {
      state.loading = true;
    },
    [postEmployee.fulfilled]: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    },
    [postEmployee.rejected]: (state) => {
      state.loading = false;
    },
    [changeEmployee.pending]: (state) => {
      state.loading = true;
    },
    [changeEmployee.fulfilled]: (state, action) => {
      const { id, name, email, occupation, salary } = action.payload;
      const existingEmployee = state.data.find((employee) => employee.id === id);
      if (existingEmployee) {
        existingEmployee.name = name;
        existingEmployee.email = email;
        existingEmployee.occupation = occupation;
        existingEmployee.salary = salary;
      };
    },
    [changeEmployee.rejected]: (state) => {
      state.loading = false;
    },

  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = userSlice.actions;

export default userSlice.reducer;