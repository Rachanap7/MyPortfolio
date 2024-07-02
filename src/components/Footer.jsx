import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faN
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="max-w-full text-white text-center bg-regal-blue-2 flex flex-col gap-8 min-h-60 items-center">
      <div className="w-1/4 h-16 bottom-2 flex justify-evenly pt-1 mt-2">
        <div className="icons skills-icon-hover brand-icon p-1.5">
          <a
            href="https://github.com/Rachanap7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icons-size" />
          </a>
        </div>
        <div className="icons skills-icon-hover brand-icon p-1.5">
          <a
            href="https://www.linkedin.com/in/rachana-parkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icons-size" />
          </a>
        </div>
        <div className="icons skills-icon-hover brand-icon p-1.5">
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
