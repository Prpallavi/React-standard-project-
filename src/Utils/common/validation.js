export const isValidEmailAddress = (email) => {
    if (email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return true;
    }
    return false;
  };
  export const isValidName = (name) => {
    if (name && name.match()) {
      return true;
    }
    return false;
  };
  
 