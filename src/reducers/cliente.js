import {
  POST_CLIENTE,
  CLIENTE_ERROR,
  GET_CLIENTES,
  GET_CLIENTE,
} from "../actions/types";

const initialState = {
  clientes: [],
  cliente: null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CLIENTES:
      return {
        ...state,
        clientes: payload,
        loading: false,
      };

    case GET_CLIENTE:
      return {
        ...state,
        cliente: payload,
        loading: false,
      };

    case POST_CLIENTE:
      return {
        ...state,
        cliente: [payload, ...state.clientes],
        loading: false,
      };

    case CLIENTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
