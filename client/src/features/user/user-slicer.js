import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Toastify from "toastify-js";
import Swal from "sweetalert2";
import { fetchProject } from "../features/project/project-slicer";
import { useDispatch } from "react-redux";

const initialState = {
  userLoginForm: { email: "", password: "" },
  userRegisterForm: { fullname: "", email: "", password: "" },
  loading: false,
  error: "",
};

export const submitLogin = (loginForm, navigate) => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.post("http://localhost:3000/login", loginForm);
    // console.log(data.access_token, "<<<< from login");
    localStorage.setItem("access_token", data.access_token);
    dispatch(fetchSuccess(data));
    Swal.fire({
      title: `Welcome To BAFKan!`,
      timer: 1500,
      showConfirmButton: false,
      color: "#ffffff",
      background: "#000000",
    });
    navigate("/kanban");
    dispatch(fetchProject());
  } catch (error) {
    // console.log(error.response.data.msg, "<<< from user-slicer");
    Toastify({
      text: `${error.response.data.msg}`,
      duration: 5000,
      position: "center",
      gravity: "top",
      close: true,
      offset: {
        y: 30,
      },
      style: {
        background: "linear-gradient(to right, #900C3F, #F94C10)",
      },
    }).showToast();
    // dispatch(fetchReject(error));
  }
};

export const submitRegister = (registerForm) => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const { data } = await axios.post(
      "http://localhost:3000/register",
      registerForm
    );

    console.log(data, "<<<< from register");
    dispatch(fetchSuccess(data));
    navigate("/login");
  } catch (error) {
    Toastify({
      text: `${error.response.data.msg}`,
      duration: 5000,
      position: "center",
      gravity: "top",
      close: true,
      offset: {
        y: 30,
      },
      style: {
        background: "linear-gradient(to right, #900C3F, #F94C10)",
      },
    }).showToast();
    // dispatch(fetchReject(error));
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    formLoginOnChange(state, action) {
      const { name, value } = action.payload;
      state.userLoginForm[name] = value;
    },
    formRegisterOnChange(state, action) {
      const { name, value } = action.payload;
      state.userRegisterForm[name] = value;
    },
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  formLoginOnChange,
  formRegisterOnChange,
  fetchPending,
  fetchSuccess,
  fetchReject,
} = userSlice.actions;

export default userSlice.reducer;
