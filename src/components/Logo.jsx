import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <h2
      className={`w-[60%]  mx-auto justify-center text-2xl text-[#063c28] font-bold tracking-wider  hover:text-[#5044e5] hoverEffect group !font-sans ${props.className}`}
    >
      <span
        className={`uppercase text-[#5044e5] group-hover:text-[#063c28] hoverEffect ${props.spanDesign}`}
      >
        S
      </span>
      martify
    </h2>
  );
};

export default Logo;
