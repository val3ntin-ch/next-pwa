import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import SignIn from "./signin";

describe("Signin page", async (assert) => {
  {
  const $ = render(<SignIn />);
  assert({
    given: "no arguments",
    should: "render signin screen",
    actual: $("[data-test-id=signin-container]").length,
    expected: 1,
  });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const title = "Sign in to Your Account";
    assert({
      given: "no arguments",
      should: "render signin title",
      actual: contains(title),
      expected: title
    });
  }  
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const buttonLabel = "Sign in to Your Account";
    assert({
      given: "no arguments",
      should: "render signin button label",
      actual: contains(buttonLabel),
      expected: buttonLabel
    });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const placeholder = "E-mail";
    assert({  
      given: "no arguments",
      should: "render signin textinput placeholder",
      actual: contains(placeholder),
      expected: placeholder
    });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const label = "email";
    assert({
      given: "no arguments",
      should: "render signin textinput label",
      actual: contains(label),
      expected: label,
    });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const label = "Sign up now";
    const href = "/signup";
    assert({
      given: "no arguments",
      should: "render signin custom link label and href",
      actual: contains(label) && contains(href),
      expected: label && href,
    });
  }
  {
    const $ = render(<SignIn />);   
    const contains = match($.html());
    const text = "Not a member yet? ";
    assert({
      given: "no arguments",
      should: "render signin text",
      actual: contains(text),
      expected: text,
    });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const label = "Sign up now";
    assert({
      given: "no arguments",
      should: "render signin custom link label",
      actual: contains(label),
      expected: label,
    });
  }
  {
    const $ = render(<SignIn />);
    const contains = match($.html());
    const href = "/signup";
    assert({
      given: "no arguments",
      should: "render signin custom link href",
      actual: contains(href),
      expected: href,
    });
  }
});
