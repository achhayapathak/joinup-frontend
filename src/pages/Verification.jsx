import Background from "../components/background";
import Heading from "../components/Heading";

export default function Verification() {
  return (
    <Background>
      <div className="min-h-screen w-full flex flex-col">
        {/* Heading - visible only on desktop */}
        <div className="flex justify-center pt-12">
          <Heading text="JoinUp" />
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 -mt-48">
          <p className="text-2xl font-chillax text-center my-2">
            Let’s verify your email so we know it’s really you.
          </p>
          <p className="text-3xl font-chillax text-center font-medium my-2">
            Check your inbox and use the link to continue!
          </p>
        </div>
      </div>
    </Background>
  );
}
