import { ActionTypes } from "./action-types";

export const fetchUserRequest = () => {
  return {
    type: ActionTypes.FETCH_USERDATA_LOADING,
  };
};

export const fetchUserSuccess = (posts) => {
  return {
    type: ActionTypes.FETCH_USERDATA_SUCCESS,
    payload: posts,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: ActionTypes.FETCH_USERDATA_FAILURE,
    payload: error,
  };
};


//country
export const fetchCountryRequest = () => {
  return {
    type: ActionTypes.FETCH_COUNTRIES_LOADING,
  };
};

export const fetchCountrySuccess = (posts) => {
  return {
    type: ActionTypes.FETCH_COUNTRIES_SUCCESS,
    payload: posts,
  };
};

export const fetchCountryFailure = (error) => {
  return {
    type: ActionTypes.FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};

//states
export const fetchStatesRequest = () => {
  return {
    type: ActionTypes.FETCH_STATES_LOADING,
  };
};

export const fetchStatesSuccess = (posts) => {
  return {
    type: ActionTypes.FETCH_STATES_SUCCESS,
    payload: posts,
  };
};

export const fetchStatesFailure = (error) => {
  return {
    type: ActionTypes.FETCH_STATES_FAILURE,
    payload: error,
  };
};



//json todos
export const fetchTodosRequest = () => {
  return {
    type: ActionTypes.FETCH_TODOS_LOADING,
  };
};

export const fetchTodosSuccess = (posts) => {
  return {
    type: ActionTypes.FETCH_TODOS_SUCCESS,
    payload: posts,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: ActionTypes.FETCH_TODOS_FAILURE,
    payload: error,
  };
};

export const addUserSuccess = (posts) => {
  return {
    type: ActionTypes.ADD_USERDATA_SUCCESS,
    payload: posts,
  };
};
