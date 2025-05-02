import React, { useEffect, useState } from "react";
import Background from "../components/background";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SocialButton from "../components/SocialButton";
import ForgotPasswordButton from "../components/ForgotPasswordButton";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../lib/api";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    mutate: createAccount,
    isPending,
    isError,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/verification");
    },
  });

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);
  return (
    <Background>
      <div className="min-h-screen w-full flex flex-col">
        {/* Heading - visible only on desktop */}
        <div className="hidden md:flex justify-center pt-12">
          <Heading text="JoinUp" />
        </div>

        {/* Main content container */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-[632px] px-4 md:px-0">
              {/* Heading - visible only on mobile */}
              <div className="md:hidden mb-20">
                <Heading text="JoinUp" />
              </div>

              {isError && (
                <p class="text-xs font-chillax font-medium text-error mb-20">
                  Hmm, the email is already registered, try loging in!
                </p>
              )}

              <div className="flex flex-col w-full">
                {/* Form Section */}
                <div className="flex flex-col gap-4 w-full mb-2">
                  <div className="flex flex-col gap-4 w-full mb-2">
                    <InputField
                      label="My email is"
                      placeholder="name@email.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                      label="& my password is"
                      placeholder="************"
                      type="password"
                      showPassword
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && createAccount({ email, password })} // Trigger login on Enter key
                    />
                  </div>
                </div>

                {/* Register Section */}
                <div className="flex flex-col w-full mb-12">
                  {/* <div className="flex justify-end mb-12">
                    <ForgotPasswordButton text={"I forgot my password"} />
                  </div> */}
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <span className="font-chillax text-xl font-normal">
                      I want to
                    </span>
                    <Button
                      disabled={!isFormValid}
                      onClick={() => createAccount({ email, password })}
                      isLoading={isPending}
                    >
                      Sign up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Login Section */}
          {/* <div className="flex flex-col items-center mb-auto">
                <span className="font-chillax text-base font-normal text-center mb-5">
                  I want to login with
                </span>
                <div className="flex items-center gap-2.5">
                  <SocialButton icon="google" />
                  <span className="font-chillax text-xl font-normal">or</span>
                  <SocialButton icon="phone" />
                </div>
              </div> */}

          {/* Create Account Section - Fixed at bottom */}
          <div className="flex justify-center py-12">
            <span className="font-chillax text-base font-normal">
              I already have an account, Let me{" "}
              <ForgotPasswordButton text={"Login"} to="/login" />
            </span>
          </div>
        </div>
      </div>
    </Background>
  );
}
