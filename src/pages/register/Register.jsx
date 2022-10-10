import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, resetUser } from "../../features/auth/authSlice";
import { Spinner } from "../../components";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { SuccessRegister, ResetPassword } from "../";
import { StyledRegister } from "./Register.styled";
import { Button } from "../../styles/globalStyles";
import useTitle from "../../helpers/useTitle";
import { registerErrMessages } from "../../helpers/errorMessagesFunctions";
import { auth } from "../../features/firebase/firebaseConfig";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormHeader,
  StyledLinks,
  StyledTextInput
} from "../../styles/form.styled";
import { errMsg } from "../../config/variables";

const Register = () => {
  useTitle("ONLINEstore | Register");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const [err, setErr] = useState("");
  const [resetPass, setResetPass] = useState(false);

  const { name, email, password, password2 } = formData;
  const { user, isLoading, isSuccess, message } = useSelector(
    state => state.auth
  );

  /* Checking if the user is logged in and if the user is verified. If the user is logged in and verified,
  ? it will redirect the user to the dashboard. If the user is logged in and not verified,
  it will redirect the user to the home page, so user can't access login page while he is logged in. */
  useEffect(() => {
    user !== null && user.isVerified
      ? navigate("/dashboard", { replace: true })
      : user && !user.isVerified
      ? navigate("/", { replace: true })
      : null;
  }, [user]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = e => {
    e.preventDefault();
    dispatch(resetUser());

    /** A function that is checking if the user has filled out all the fields and if the password is the
     * same as the confirm password. If the user has not filled out all the fields or the password is
     * not the same as the confirm password, it will set the error message.
     * @param {string} name user's full name.
     * @param {string} email user's email.
     * @param {string} password user's password.
     * @param {string} password2 confirm password.
     * @param {string} message if there is any catch error messages from the API.
     *
     */
    registerErrMessages(name, email, password, password2, setErr, message);

    const userData = { email, password };

    name,
      email,
      password,
      password2 &&
        password === password2 &&
        (dispatch(register(userData)),
        onAuthStateChanged(auth, async user => {
          user &&
            updateProfile(auth.currentUser, {
              displayName: name
            });
        }));
  };

  //If the user is successfully registered, it will redirect the user to the SuccessRegister component.
  if (isSuccess && !user?.emailVerified) {
    return (
      <SuccessRegister email={email || user?.email} name={name || user?.name} />
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {resetPass ? (
        <ResetPassword setReset={setResetPass} />
      ) : (
        !user && (
          <StyledRegister>
            <StyledFormContainer>
              <StyledForm onSubmit={handleRegister} ref={formRef}>
                <StyledFormHeader>
                  <h1>register a new account!</h1>
                  <h3>Please fill out all fields.</h3>
                </StyledFormHeader>
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={name}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="true"
                />
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="mail@example.com"
                  autoComplete="true"
                />
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password ..."
                />
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={password2}
                  type="password"
                  name="password2"
                  placeholder="Confirm Password ..."
                  mb="50px"
                />

                <div style={errMsg}>{err && <p>{err}</p>}</div>
                <Button type="submit" mw="120px" rounded>
                  Sign up
                </Button>
                <StyledLinks>
                  <Link to="/login">
                    <p>Already have an account?</p>
                  </Link>
                  <Link onClick={() => setResetPass(!resetPass)} to="">
                    <p>reset password?</p>
                  </Link>
                </StyledLinks>
              </StyledForm>
            </StyledFormContainer>
          </StyledRegister>
        )
      )}
    </>
  );
};
export default Register;
