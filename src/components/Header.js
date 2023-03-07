const Header = ({ title = "" } = {}) => (
  <div className="text-2xl text-[#FEFDFD] py-4 font-bold text-center">
    <span>{title}</span>
    <br />
    <span className="text-lg text-[#626567]">Your own Digital Space</span>
  </div>
);

export default Header;
