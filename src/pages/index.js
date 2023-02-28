import Link from "next/link";

const Home = () => (
  <div className="flex justify-center justify-items-center  items-center w-screen h-screen border-gray-900 ">
    <div>
      <div>
        <h1>Hi ! Welcome back</h1>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <button type="button">Sign In</button>
      </div>
      <div>
        <span>New here?</span>
        <Link href="/signup">Sign up instead</Link>
      </div>
    </div>
  </div>
);

export default Home;
