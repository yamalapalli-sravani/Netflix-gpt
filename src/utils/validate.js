export const checkValidateData = (email, passwpord) => {
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwpord);
  if (!emailValid) return "emailId is not valid";
  if (!passwordValid) return "password is not valid";
  return null;
};
