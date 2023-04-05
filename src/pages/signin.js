import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";

const noop = () => {};

const SignIn = () => (
  <div className="flex  min-h-full justify-center justify-items-center font-mono  bg-[#171616]">
    <div className="py-32 w-screen h-screen px-8 ">
      <Header title={"Sign in to Your Account"} />
      <div className="mt-20 ">
        <TextInput
          id="email-id"
          label="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="E-mail"
        />
      </div>
      <div className="mt-12">
        <Button label={"Sign in to Your Account"} />
      </div>
      <div className="mt-7  text-center text-xs">
        <span className="text-[#626567]">{`Not a member yet? `}</span>
        <CustomLink label="Sign up now" href="/signup" />
      </div>
    </div>
  </div>
);

export default SignIn;
