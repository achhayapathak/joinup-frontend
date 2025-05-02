import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../lib/api";
import Background from "../components/background";
import Heading from "../components/Heading";
import ForgotPasswordButton from "../components/ForgotPasswordButton";

function VerifyEmail() {
  const { code } = useParams();
  const { isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code),
  });
  return (
    <Background>
      <div className="min-h-screen w-full flex flex-col">
        {/* Heading - visible only on desktop */}
        <div className="flex justify-center pt-12">
          <Heading text="JoinUp" />
        </div>

        {isSuccess && (
          <div className="flex flex-col items-center justify-center w-full flex-1 -mt-48">
            <p className="text-3xl font-chillax text-center font-medium my-2">
              Awesome! Let’s move ahead.
            </p>
            <p className="text-2xl font-chillax text-center truncate my-2">
              Getting things ready...
            </p>
            <div className="mt-10">
              <ForgotPasswordButton
                text={"Let's move to Onboarding!"}
                to="/onboarding"
              />
            </div>
          </div>
        )}
        {isError && (
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
                to="/password/reset"
              />
            </div>
          </div>
        )}
      </div>
    </Background>
  );
}

export default VerifyEmail;
