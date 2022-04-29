import {
  addUserSuccess,
  fetchCountryRequest,
  fetchCountrySuccess,
  fetchStatesRequest,
  fetchStatesSuccess,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../app/action";
import axios from "axios";
import {
  deleteData,
  getData,
  patchData,
  postData,
} from "../../services/baseapiservices";
import {
  countryview_url,
  country_url,
  deleteprofile_url,
  profileview_url,
  profile_url,
  statesview_url,
  todo_url,
  USER_BASE_URL,
} from "../../apiConfig/users";

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    const response = getData(USER_BASE_URL)
      .then((res) => dispatch(fetchUserSuccess(res)))
      .catch((error) => {
        throw error;
      });
      return response;
    console.log(response);
  };
};

export const fetchProfiles = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    const response = getData(profileview_url)
      .then((res) => dispatch(fetchUserSuccess(res)))
      .catch((error) => {
        throw error;
      });
      return response
    console.log(response);
  };
};

// Dropdown countries fetch

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountryRequest());

    const response = getData(countryview_url)
      .then((res) =>  {
        dispatch(fetchCountrySuccess(res))
      return res
    })
      .catch((error) => {
        throw error;
      });
     
    console.log(response);
    return response
  };
};

//dropdown fetch states
export const fetchStates = (id) => {
  console.log(id)
  return (dispatch) => {
   
    dispatch(fetchStatesRequest());

    const response = getData(statesview_url+id)
      .then((res) =>{
        dispatch(fetchStatesSuccess(res)) 
        return res
      }) 
      
      .catch((error) => {
        throw error;
      });
    console.log(response);
    return response
  };
};

// fetch json todos
export const fetchTodos = (start,limit) => {
  return (dispatch) => {
   
    dispatch(fetchTodosRequest());

    const response = getData(`${todo_url}?_start=${start}&_limit=${limit}`)
      .then((res) =>{
        dispatch(fetchTodosSuccess(res)) 
        return res
      }) 
      
      .catch((error) => {
        throw error;
      });
    console.log(response);
    return response
  };
};


export const addUser = (data) => {
  return (dispatch) => {
 
    const response = postData(USER_BASE_URL, data)
      .then((res) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        throw error;
      });
    console.log(response);
  };
};

export const profileUser = (data) => {
  return (dispatch) => {
    const response = postData(profile_url, data)
      .then((res) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        throw error;
      });
    console.log(response);
  };
};

// Dropdown countries post

export const addCountries = (data) => {
  return (dispatch) => {
    const response = postData(country_url, data)
      .then((res) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        throw error;
      });
    console.log(response);
  };
};

export const deleteUser = (data) => {
  return (dispatch) => {
    const response = deleteData(USER_BASE_URL + data)
      .then((res) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        throw error;
      });
    console.log(response);
  };
};
export const editUser = (id, data) => {
  return (dispatch) => {
    const response = patchData(USER_BASE_URL + id, data)
      .then((res) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        throw error;
      });
      return response
    console.log(response);
  };
};
//
export const Deleteprofile = (data) => {
  return (dispatch) => {
    const response = deleteData(deleteprofile_url + data)
      .then((res) => {
        dispatch(fetchProfiles());
      })
      .catch((error) => {
        throw error;
      });
      return response
    console.log(response);
  };
};
export const editProfile = (id, data) => {
  return (dispatch) => {
    const response = patchData(profileview_url + id, data)
      .then((res) => {
        dispatch(fetchProfiles());
      })
      .catch((error) => {
        throw error;
      });
      return response
    console.log(response);
  };
};
