import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../../components";
import { encryptedUser, login, resetUser } from "../../features/auth/authSlice";
import { LoginCheckboxInput, StyledLogin } from "./Login.styled";
import { Button } from "../../styles/globalStyles";
import { ResetPassword } from "../";
import useTitle from "../../helpers/useTitle";
import { loginErrMessages } from "../../helpers/errorMessagesFunctions";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormHeader,
  StyledLinks,
  StyledTextInput
} from "../../styles/form.styled";
import { errMsg } from "../../config/variables";

const Login = () => {
  useTitle("ONLINEstore | Login");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, message, isLoading, isError } = useSelector(
    state => state.auth
  );

  const rememberedCridentials = encryptedUser.getItem("_rM");

  const [formData, setFormData] = useState(() => {
    return (
      rememberedCridentials || { email: "", password: "", rememberMe: false }
    );
  });

  const [err, setErr] = useState("");
  const [reset, setReset] = useState(false);

  const { email, password, rememberMe } = formData;

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  useEffect(() => {
    !rememberMe && encryptedUser.removeItem("_rM");
  }, [rememberMe]);

  /**
   * This @useEffectHook is checking if the user is logged in and if user is verified. If user is logged in and
   * verified, he is redirected to the dashboard. If he is logged in but not verified, he is
   * redirected to the home page.
   * plus that user can't access login page if he is logged in anyway.
   */
  useEffect(() => {
    user !== null && user.isVerified
      ? navigate("/dashboard", { replace: true })
      : user && !user.isVerified
      ? navigate("/", { replace: true })
      : null;
  }, [user]);

  const handleLogin = e => {
    e.preventDefault();

    /**
     * This @ternaryOperator is checking if the user has checked the remember me checkbox. If he has, the user data is saved in the local storage. If he hasn't, the user data is removed from the local storage. */
    !rememberMe
      ? dispatch(resetUser())
      : encryptedUser.setItem("_rM", formData);

    const userData = { email, password };
    dispatch(login(userData));
  };

  /**
   * @function to handle error messages
   * @param {string} message message state, which returned from catch error of login form of Firebase
   * @param {React.Dispatch()} setErr
   */
  useEffect(() => {
    loginErrMessages(message, setErr);
    return () => loginErrMessages(message, setErr);
  }, [message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {reset ? (
        <ResetPassword setReset={setReset} />
      ) : (
        !user && (
          <StyledLogin>
            <StyledFormContainer>
              <StyledForm onSubmit={handleLogin}>
                <StyledFormHeader>
                  <h1>welcome back!</h1>
                  <h3>Please enter your login credentials.</h3>
                </StyledFormHeader>
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={email}
                  name="email"
                  type="email"
                  placeholder="mail@example.com"
                />
                <StyledTextInput
                  onChange={onChange}
                  onInput={() => setErr("")}
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password ..."
                />
                <LoginCheckboxInput>
                  <input
                    onChange={onChange}
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={rememberMe}
                  />
                  <label htmlFor="rememberMe">Remember Me.</label>
                </LoginCheckboxInput>
                <div style={errMsg}>{isError && <p>{err}</p>}</div>
                <Button mw="120px" rounded>
                  Login
                </Button>
                <StyledLinks>
                  <Link to="/register">
                    <p>don't have an account?</p>
                  </Link>
                  <Link onClick={() => setReset(!reset)} to="">
                    <p>forgot password?</p>
                  </Link>
                </StyledLinks>
              </StyledForm>
            </StyledFormContainer>
          </StyledLogin>
        )
      )}
    </>
  );
};
export default Login;
