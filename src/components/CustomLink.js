import Link from "next/link";

const CustomLink = ({ label = "", href = "" } = {}) => (
  <Link
    href={href}
    className="text-[#FEFDFD] border-b-[#FEFDFD] border-b-2 focus:border-[#7A7B7A] focus:text-[#7A7B7A] hover:text-[#7A7B7A] hover:border-[#7A7B7A]"
  >
    {label}
  </Link>
);

export default CustomLink;
