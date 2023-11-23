import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  project: [],
  loading: false,
  error: "",
};

const addFormState = {
  formAddProject: { name_project: "", description: "" },
};

const getToken = localStorage.getItem("access_token");

export const fetchProject = () => async (dispatch) => {
  // console.log(getToken, "<<< token");
  try {
    dispatch(fetchPending());

    const { data } = await axios.get("http://localhost:3000/projects/", {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });

    // console.log(data, "<<<< from project fetching");
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchReject(error.message));
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.project = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const addProjectSlice = createSlice({
  name: "addProject",
  addFormState,
  reducers: {
    formAddProjectChange(state, action) {
      const { name, value } = action.payload;
      state.formAddProject[name] = value;
    },
  },
});

// export const submitAddProject = () => async() => {
//   try {
//     const {data} = await axios.post
//   } catch (error) {
//     console.log(error);
//   }
// }

export const { fetchPending, fetchSuccess, fetchReject } = projectSlice.actions;
export const { formAddProjectChange } = addProjectSlice.actions;

// Secara otomatis dari slice yang dibuat juga menyediakan reducernya.
export default projectSlice.reducer;
