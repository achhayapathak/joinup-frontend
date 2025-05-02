import React, { useState } from "react";
import Background from "../components/background";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useMutation } from "@tanstack/react-query";
import { sendPasswordResetEmail } from "../lib/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: sendPasswordResetEmail,
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

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center w-full flex-1 gap-20 -mt-36">
            <p className="text-3xl font-chillax text-center font-medium">
              We’ve sent a reset link to your email.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full flex-1 gap-20 -mt-36">
            <p className="text-2xl font-chillax text-center">
              Oh no! But don’t worry, we’ll send you a password reset link.
            </p>
            <InputField
              label="My email is"
              placeholder="name@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-center items-center gap-2">
              <span className="font-chillax text-xl font-normal">
                Send me the password
              </span>
              <Button
                disabled={!email}
                onClick={() => sendPasswordReset(email)}
                isLoading={isPending}
              >
                Reset link
              </Button>
            </div>
          </div>
        )}
      </div>
    </Background>
  );
};

export default ForgotPassword;
