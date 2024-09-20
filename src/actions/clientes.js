import axios from "axios";
import Cookies from "js-cookie";

import {
  POST_CLIENTE,
  CLIENTE_ERROR,
  GET_CLIENTES,
  GET_CLIENTE,
} from "./types";

// GET CLIENTES
export const getClientes = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true, // This is important for CORS with credentials
    };

    console.log("Trying to get clientes");

    const res = await axios.get("http://3.131.137.53:8080/pos/user", config);

    console.log(res.data);

    dispatch({
      type: GET_CLIENTES,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error fetching clientes:", error);
    dispatch({
      type: CLIENTE_ERROR,
      payload: {
        msg: error.response ? error.response.data : "Network Error",
        status: error.response ? error.response.status : null,
      },
    });
  }
};
//GET CLIENTE
export const getCliente = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://3.131.137.53:8080/pos/user/${id}`);

    dispatch({
      type: GET_CLIENTE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//POST cliente
export const addCliente = (formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      "http://3.131.137.53:8080/pos/auth/register",
      formData,
      config
    );

    dispatch({
      type: POST_CLIENTE,
      payload: res.data,
    });

    return { success: true };
  } catch (error) {
    dispatch({
      type: CLIENTE_ERROR,
      payload: {
        msg: error.response ? error.response.data : "Server Error",
        status: error.response ? error.response.status : 500,
      },
    });

    return {
      success: false,
      error: error.response ? error.response.data : "Server Error",
    };
  }
};
