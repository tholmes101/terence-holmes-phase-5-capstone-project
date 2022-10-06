import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const getEmployees = createAsyncThunk("employees/getEmployees", async () => {
  const resp = await fetch("/employees");
  const data = await resp.json();
  console.log(data);
  return data;
});

export const delEmployee = createAsyncThunk("users/deleteUser", async (employee) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const resp = await fetch(`/employees/${employee.id}`, config);
    const data = await resp.json();
    return data;
  });
  
  export const postEmployee = createAsyncThunk("employees/postemployee", async (employee) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    };
    const resp = await fetch("/employees", config);
    const data = await resp.json();
    return data;
  });
  
  export const updEmployee = createAsyncThunk("users/updEmployee", async (employee) => {
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    };
    const resp = await fetch(`/employees/${employee.id}`, config);
    const data = await resp.json();
    return data;
  });



const userSlice = createSlice({
    name: "users",
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
        [getEmployees.pending]: (state, action) => {
            state.loading = true;
        },
        [getEmployees.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getEmployees.rejected]: (state, action) => {
            state.loading = false;
        },
        [delEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [delEmployee.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.filter((employee) => employee.id !== action.payload.id);
        },
        [delEmployee.rejected]: (state, action) => {
            state.loading = false;
        },
        [postEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [postEmployee.fulfilled]: (state, action) => {
            state.loading = false;
            state.data.push(action.payload);
        },
        [postEmployee.rejected]: (state, action) => {
            state.loading = false;
        },
        [updEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [updEmployee.fulfilled]: (state, action) => {
            const { id, name, email, occupation, salary } = action.payload;
            const existingEmployee = state.data.find((employee) => employee.id === id);
            if (existingEmployee) {
              existingEmployee.name = name;
              existingEmployee.email = email;
              existingEmployee.occupation = occupation;
              existingEmployee.salary = salary;
            };
        },
        [updEmployee.rejected]: (state, action) => {
            state.loading = false;
        },
       
    },
});

export const { addEmployee, updateEmployee, deleteEmployee } = userSlice.actions;

export default userSlice.reducer;