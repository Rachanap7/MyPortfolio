import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
const ContactMe = () => {
  return (
    <div className="max-w-full font-sans bg-regal-blue-2 text-white" id="contact">
      <div className="text-center font-semibold p-4 text-3xl">
        Get in touch
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex text-lg max-w-60 max-h-40">
          <div className="flex flex-col rounded-md text-left p-4">
          <FontAwesomeIcon icon={faEnvelope} className="icons-size self-center skills-icon-hover cursor-pointer" />

            {/* <span className="text-center mb-1 font-bold">
             parkar.rachana@gmail.com
            </span> */}
            <a href="mailto:parkar.rachana@gmail.com" className="text-center mb-1 font-bold hover:cursor-pointer hover:scale-110 hover:text-orange transition-all duration-500 ease-in hover:rounded-lg">parkar.rachana@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
