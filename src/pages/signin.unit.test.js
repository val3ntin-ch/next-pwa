import { describe } from "riteway";
import render from "riteway/render-component";
import SignIn from "./signin";

describe("Signin page", async (assert) => {
  const createSignin = render(<SignIn />);

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.length,
    expected: 1,
  });

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.type,
    expected: "div",
  });

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.props.className,
    expected:
      "flex  min-h-full justify-center justify-items-center font-mono  bg-[#171616]",
  });

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.props.children.type,
    expected: "div",
  });

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.props.children.props.className,
    expected: "py-32 w-screen h-screen px-8 ",
  });

  assert({
    given: "no arguments",
    should: "render signin page",
    actual: createSignin.props.children.props.children[0].type,
    expected: Header,
  });
});
