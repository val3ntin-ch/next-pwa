import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import Signup from "./signup";


describe("Signup page", async (assert) => {
    {
        const $ = render(<Signup />);
        assert({
        given: "no arguments",
        should: "render signup screen",
        actual: $("[data-test-id=signup-container]").length,
        expected: 1,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const title = "Sign up to Your Account";
        assert({
        given: "no arguments",
        should: "render signup title",
        actual: contains(title),
        expected: title,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const buttonLabel = "Sign up to Your Account";
        assert({
        given: "no arguments",
        should: "render signup button label",
        actual: contains(buttonLabel),
        expected: buttonLabel,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const placeholder = "E-mail";
        assert({
        given: "no arguments",
        should: "render signup textinput placeholder",
        actual: contains(placeholder),
        expected: placeholder,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const label = "email";
        assert({
        given: "no arguments",
        should: "render signup textinput label",
        actual: contains(label),
        expected: label,
        });
    }
    {
      const $ = render(<Signup />);
      const contains = match($.html());
      const linkLabel = "Sign in now";
        assert({
        given: "no arguments",
        should: "render signup link label",
        actual: contains(linkLabel),
        expected: linkLabel,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const linkHref = "/signin";
        assert({
        given: "no arguments",
        should: "render signup link href",
        actual: contains(linkHref),
        expected: linkHref,
        });
    }
    {
        const $ = render(<Signup />);
        const contains = match($.html());
        const linkText = "Already a member? ";
        assert({
        given: "no arguments",
        should: "render signup link text",
        actual: contains(linkText),
        expected: linkText,
        });
    }
    }); 
