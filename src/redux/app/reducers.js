import { ActionTypes } from "./action-types";

const INITIAL_STATE = {
  loading: false,
  users: [],
  dcountries: [],
  dstates: [],
  todoslist: [],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERDATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_USERDATA_SUCCESS:
      return {
        loading: false,
        users: action.payload,

        error: "",
      };
    case ActionTypes.FETCH_USERDATA_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    //COUNTRIES
    case ActionTypes.FETCH_COUNTRIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        dcountries: action.payload,

        error: "",
      };
    case ActionTypes.FETCH_COUNTRIES_FAILURE:
      return {
        loading: false,
        dcountries: [],
        error: action.payload,
      };

    //STATES

    case ActionTypes.FETCH_STATES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_STATES_SUCCESS:
      return {
        loading: false,
        dstates: action.payload,

        error: "",
      };
    case ActionTypes.FETCH_STATES_FAILURE:
      return {
        loading: false,
        dstates: [],
        error: action.payload,
      };

    //TODOS

    case ActionTypes.FETCH_TODOS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todoslist: action.payload,

        error: "",
      };
    case ActionTypes.FETCH_TODOS_FAILURE:
      return {
        loading: false,
        todoslist: [],
        error: action.payload,
      };

    case ActionTypes.ADD_USERDATA_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
