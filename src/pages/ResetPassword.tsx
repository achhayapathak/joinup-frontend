import React, { useState } from "react";
import Background from "../components/background";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import ForgotPasswordButton from "../components/ForgotPasswordButton";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../lib/api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const exp = Number(searchParams.get("exp"));
  const now = Date.now();
  const linkIsValid = code && exp && exp > now;
//   console.log(linkIsValid);
  console.log(code, exp, now);
  console.log(exp > now);

  const {
    mutate: resetUserPassword,
    isPending,
    isError,
  } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });

  return (
    <Background>
      <div className="min-h-screen w-full flex flex-col">
        {/* Heading - visible only on desktop */}
        <div className="flex justify-center pt-12">
          <Heading text="JoinUp" />
        </div>

        {isError && (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-xs font-chillax font-medium text-error mt-20 -mb-20">
              Hmm, that is not a valid email, try again!
            </p>
          </div>
        )}

        {linkIsValid ? (
          <div className="flex flex-col items-center justify-center w-full flex-1 -mt-36 gap-16">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-2xl font-chillax text-center my-2">
                Set your new password and try not to forget it again!
              </p>
              <p className="text-2xl font-chillax text-center my-2">
                But don’t worry, we’ve got your back if you do.
              </p>
            </div>
            <InputField
              label="My new password is"
              placeholder="************"
              type="password"
              showPassword
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center items-center gap-2">
              <Button
                disabled={!password}
                onClick={() =>
                  resetUserPassword({ password, verificationCode: code })
                }
                isLoading={isPending}
              >
                Save
              </Button>
              <span className="font-chillax text-xl font-normal">
                this as my password
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full flex-1 -mt-48">
            <p className="text-3xl font-chillax text-center font-medium my-2">
              Oops! That link didn’t work.
            </p>
            <p className="text-2xl font-chillax text-center my-2">
              No worries—let’s try again.
            </p>
            <div className="mt-10">
              <ForgotPasswordButton
                text={"Send me a new link"}
                to="/password/forgot"
              />
            </div>
          </div>
        )}
      </div>
    </Background>
  );
};

export default ResetPassword;
