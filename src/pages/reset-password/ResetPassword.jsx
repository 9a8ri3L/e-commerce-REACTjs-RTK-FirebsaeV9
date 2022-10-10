import { Button } from "../../styles/globalStyles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ResetPasswordLinks,
  StyledResetPassword
} from "./ResetPassword.styled";
import { sendPasswordResetEmail } from "firebase/auth";
import Spinner from "../../components/spinner/Spinner";
import { auth } from "../../features/firebase/firebaseConfig";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormHeader,
  StyledTextInput
} from "../../styles/form.styled";
import { errMsg, sucMsg } from "../../config/variables";

const ResetPassword = ({ setReset }) => {
  const [email, setEmail] = useState("");
  const resEmail = email;
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passResetSent, setPassResetSent] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = async e => {
    e.preventDefault();
    setIsLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        setPassResetSent(
          `Password reset Link has been sent to ${resEmail}, please check your E-mail!`
        );
        setMail(`https://www.${resEmail.substring(resEmail.indexOf("@") + 1)}`);
        setErr("");
        setEmail("");
        // ..
      })
      .catch(error => {
        setIsLoading(false);
        const errorCode = error.code;
        errorCode == "auth/missing-email" &&
          setErr("Please enter your registered E-mail!");
        errorCode == "auth/user-not-found" &&
          setErr("The E-mail you have entered is NOT registered!");
        errorCode == "auth/invalid-email" &&
          setErr("The E-mail you have entered is INVALID!");
        errorCode == "auth/too-many-requests" &&
          setErr(
            "Error occurred due to many requests, please try again later!"
          );
        const errorMessage = error.message;
      });
  };

  const onChange = e => {
    setEmail(e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <StyledResetPassword>
        <StyledFormContainer>
          <StyledForm onSubmit={handleResetPassword}>
            <StyledFormHeader>
              <h1>reset password!</h1>
              <h3>Please enter your registered E-mail.</h3>
            </StyledFormHeader>
            <StyledTextInput
              onChange={onChange}
              onInput={() => setErr("")}
              value={email}
              name="email"
              type="email"
              placeholder="mail@example.com"
            />
            <div style={errMsg}>{err && <p>{err}</p>}</div>
            {passResetSent && (
              <>
                <p style={sucMsg}>{passResetSent}</p>
                <p>
                  <a href={mail} target="_blank">
                    --- check your E-mail ---
                  </a>
                </p>
              </>
            )}
            <Button
              onClick={() => {
                passResetSent && (navigate("/login"), setReset(false));
              }}
              rounded
            >
              {passResetSent ? "Go to Login page" : "Reset Password"}
            </Button>
            <ResetPasswordLinks>
              <Link to="/register" onClick={() => setReset(false)}>
                <p>register a new account?</p>
              </Link>
              <Link to="/">
                <p>go to home page</p>
              </Link>
            </ResetPasswordLinks>
          </StyledForm>
        </StyledFormContainer>
      </StyledResetPassword>
    </>
  );
};

export default ResetPassword;
