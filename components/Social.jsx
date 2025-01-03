import Link from "next/link";
import { FaGithub, FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={26} />, path: "https://github.com/newberg85" }, 
  { icon: <FaBehance size={26} />, path: "https://www.behance.net/bergviana" },
  { icon: <FaLinkedinIn size={26} />, path: "https://www.linkedin.com/in/wandemberg-de-meneses-viana-526019261/" },
  { icon: <FaInstagram size={26} />, path: "https://www.instagram.com/new.berg85/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
