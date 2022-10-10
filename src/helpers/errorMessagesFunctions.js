import { AuthErrorCodes } from "firebase/auth";

/**
 * It takes in a message and a setErr function and sets the error message based on the message
 * @param message - The error message returned from the Firebase API.
 * @param setErr - This is a function that sets the error message in the state.
 */
export const loginErrMessages = (message, setErr) => {
  if (message.includes(AuthErrorCodes.INVALID_PASSWORD)) {
    setErr("Wrong Password, please enter a valid password!");
  }
  if (message.includes("auth/user-disabled")) {
    setErr(
      "Your account has been suspended, please contact our customer service!"
    );
  }
  if (message.includes("(auth/user-not-found)")) {
    setErr("E-mail not found, please enter a registered E-mail!");
  }
  if (message.includes(AuthErrorCodes.INVALID_EMAIL)) {
    setErr("Please enter a valid registered E-mail!");
  }
  if (message.includes(AuthErrorCodes.INTERNAL_ERROR)) {
    setErr("Please enter your password!");
  }
  if (message.includes("(auth/too-many-requests)")) {
    setErr(
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later!"
    );
  }
};

/**
 * It checks if the user has entered all the required fields and if the passwords match. If not, it
 * returns an error message
 * @param name - The name of the user
 * @param email - The email address of the user.
 * @param password - the password entered by the user
 * @param password2 - the second password field
 * @param setErr - a function that sets the error message in the state
 * @param message - The error message returned from the server.
 * @returns the setErr function with the error message as the argument.
 */
export const registerErrMessages = (
  name,
  email,
  password,
  password2,
  setErr,
  message
) => {
  if (!name) {
    return setErr("Please enter your name!");
  }
  if (!email) {
    return setErr("You must enter a valid E-mail to register a new account!");
  }
  if (!password || password.length < 6) {
    return setErr("Please enter at least 6 characters for password!");
  }

  if (!password2 || password !== password2) {
    return setErr("Passwords don't match!");
  }
  if (message.includes(AuthErrorCodes.INVALID_EMAIL)) {
    setErr("Please enter a valid E-mail!");
  }
};
