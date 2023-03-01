const TextInput = () => (
  <div className=" text-[#50536E] p-0.5 bg-gradient-to-r from-[#F06D2A] to-[#924EA6] rounded-lg">
    <label htmlFor="email-login" className="sr-only">
      Email address
    </label>
    <input
      id="email-login"
      className="w-full text-lg py-2 px-3 leading-8 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-0 focus:ring-offset-[#F16D29] dark:focus:ring-offset-[#9550A3]  placeholder-[#7A7B7A] rounded-lg bg-[#222323] "
      name="email"
      type="email"
      autoComplete="email"
      required
      placeholder="E-mail"
    />
  </div>
);

export default TextInput;
