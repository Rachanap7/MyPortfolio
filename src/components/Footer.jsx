import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="max-w-full text-ruby text-center bg-skin-tone1 flex flex-col gap-8 min-h-60 items-center">
      <div className="w-1/4 h-16 bottom-2 flex justify-evenly pt-1 mt-2">
        <div className="bg-sky-950 border-sky-950 border-2 rounded-md icons hover:bg-transparent hover:border-black cursor-pointer">
          <a
            href="https://github.com/Rachanap7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icons-size" />
          </a>
        </div>
        <div className="bg-sky-950 border-sky-950 border-2 rounded-md icons hover:bg-transparent hover:border-black">
          <a
            href="https://www.linkedin.com/in/rachana-parkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icons-size" />
          </a>
        </div>
        <div className="bg-sky-950 border-sky-950 border-2 rounded-md icons hover:bg-transparent hover:border-black">
          <a
            href="https://www.instagram.com/rachana_6_7"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faInstagram} className="icons-size" />
          </a>
        </div>
      </div>
      <span className="mb-3">© Rachana Parkar. All rights reserved.</span>
    </div>
  );
};

export default Footer;
