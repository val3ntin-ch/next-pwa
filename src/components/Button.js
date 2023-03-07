const noop = () => {};

const Button = ({ label = "", onClick = noop } = {}) => (
  <button
    type="button"
    className="w-full bg-gradient-to-r from-[#F06D2A] to-[#924EA6] rounded-lg text-[#FEFDFD] p-3"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
