import TextInput from "@/components/TextInput";
import Link from "next/link";

const Home = () => (
  <div className="flex  min-h-full justify-center justify-items-center font-mono  bg-[#171616]">
    <div className="py-32 w-screen h-screen px-8 ">
      <div className="text-2xl text-[#FEFDFD] py-4 font-bold text-center">
        <span>Login to Your Account</span>
        <br />
        <span className="text-lg text-[#626567]">Your own Digital Space</span>
      </div>
      <div className="mt-20 ">
        <TextInput />
      </div>
      <div className="mt-12">
        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#F06D2A] to-[#924EA6] rounded-lg text-[#FEFDFD] p-3"
        >
          Login to Your Account
        </button>
      </div>
      <div className="mt-7  text-center text-xs">
        <span className="text-[#626567]">{`Not a member yet? `}</span>
        <Link
          href="/signup"
          className="text-[#FEFDFD] border-b-[#FEFDFD] border-b-2 focus:border-[#7A7B7A] focus:text-[#7A7B7A] hover:text-[#7A7B7A] hover:border-[#7A7B7A]"
        >
          Register Now
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
