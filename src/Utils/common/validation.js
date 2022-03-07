export const isValidEmailAddress = (email) => {
  if (email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return true;
  }
  return false;
};
export const isValidMobile = (mobile) => {
  if (mobile && mobile.match(/^[6-9]\d{9}$/gi)) {
    return true;
  }
  return false;
};

