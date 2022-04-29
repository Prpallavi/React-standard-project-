export const  base_url = process.env.REACT_APP_BASE_URL

export const  profile_url = base_url+"profile"
export const  profileview_url = base_url+"profileview/"

export const  deleteprofile_url = base_url+"remove/"
console.log(deleteprofile_url)

export const  country_url = base_url+"country"
export const  countryview_url = base_url+"countryview"

export const  states_url = base_url+"states"
export const  statesview_url = base_url+"statesview/"

export const json_url=process.env.REACT_APP_JSON_URL
export const todo_url=json_url+"comments"
export const post_url=json_url+"posts"
console.log("post url",post_url)
console.log("json url",json_url)
console.log("todo url",todo_url)



console.log("url",base_url)
export  const USER_BASE_URL=base_url ;