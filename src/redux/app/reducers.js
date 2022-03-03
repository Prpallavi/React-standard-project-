import { ActionTypes } from "./action-types";

const INITIAL_STATE = {
  loading: false,
  users: [],
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
