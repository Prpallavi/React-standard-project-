import { ActionTypes } from "./action-types";

export const fetchUserRequest = () => {
    return {
      type: ActionTypes.FETCH_USERDATA_LOADING
    }
  }
  
  export const fetchUserSuccess = posts => {
    return {
      type: ActionTypes.FETCH_USERDATA_SUCCESS,
      payload: posts
    }
  }
  
  export const fetchUserFailure = error => {
    return {
      type: ActionTypes.FETCH_USERDATA_FAILURE,
      payload: error
    }
  }

  export const addUserSuccess = posts => {
    return {
      type: ActionTypes.ADD_USERDATA_SUCCESS,
      payload: posts
    }
  }