import React, { useState } from "react";
import {
  CreateAccountBtn,
  FormGroup,
  GoogleBtn,
  Input,
  Label,
  LoginLink,
  MainSection,
  RightSection,
  SocialAuth,
  SocialIcon,
  CheckboxLabel,
  CheckboxInput,
  ErrorRegex,
} from "./Styled";
import googleIcon from "../../assets/google.png";
import logo from "../../assets/logo.png";

// Regex para validação de email e senha
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/;

interface Props {
  onCreateAccount: (userData: {
    username: string;
    email: string;
    password: string;
    role: string[];
  }) => void;
}

export default function NewSignUpForm({ onCreateAccount }: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkedPolicy, setCheckedPolicy] = useState(false);
  const [policyError, setPolicyError] = useState("");
  let emailValidationTimeout: number | null = null;
  let passwordValidationTimeout: number | null = null;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailValidationTimeout) clearTimeout(emailValidationTimeout);
    emailValidationTimeout = setTimeout(() => {
      if (!EMAIL_REGEX.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }, 300);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordValidationTimeout) clearTimeout(passwordValidationTimeout);
    passwordValidationTimeout = setTimeout(() => {
      if (!PASSWORD_REGEX.test(value)) {
        setPasswordError(
          "Password must be at least 8 characters long and include uppercase, lowercase, and special characters."
        );
      } else {
        setPasswordError("");
      }
    }, 300);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPolicy(e.target.checked);
    setPolicyError(""); // Limpa o erro quando a checkbox é marcada
  };

  const handleSubmit = () => {
    console.log("Submit");
    if (!EMAIL_REGEX.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    if (!PASSWORD_REGEX.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include uppercase, lowercase, and special characters."
      );
      return;
    }
    if (!checkedPolicy) {
      setPolicyError("You must agree to the terms and conditions.");
      return;
    }
    const userData = {
      username,
      email,
      password,
      role: ["MODERATOR"],
    };
    onCreateAccount(userData);
  };

  return (
    <MainSection>
      <RightSection>
        <img src={logo} width={"75px"} height={"75"} alt="Logo" />
        <h2>Get Started Now</h2>

        {/* Usando um div ao invés de form */}
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username here"
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email here"
            required
          />
          <ErrorRegex>{emailError}</ErrorRegex>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your Password here"
            required
          />
          <ErrorRegex>{passwordError}</ErrorRegex>

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={checkedPolicy}
              onChange={handleCheckboxChange}
              required
            />{" "}
            Agree with terms & policy
          </CheckboxLabel>
          <ErrorRegex>{policyError}</ErrorRegex>
        </FormGroup>

     
        <CreateAccountBtn onClick={handleSubmit}>Create Account</CreateAccountBtn>

        <p>
          Already have an account?{" "}
          <LoginLink href="/login">Log in</LoginLink>
        </p>
        <SocialAuth>
          <span>OR</span>
          <GoogleBtn>
            <SocialIcon src={googleIcon} alt="Google" />
            Sign up with Google
          </GoogleBtn>
        </SocialAuth>
      </RightSection>
    </MainSection>
  );
}