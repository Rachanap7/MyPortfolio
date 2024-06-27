import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
const ContactMe = () => {
  return (
    <div className="max-w-full font-sans text-gray-500 bg-skin-tone1 text-ruby" id="contact">
      <div className="text-center font-semibold p-4 text-3xl">
        Get in touch
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex text-lg max-w-60 max-h-40">
          <div className="flex flex-col backdrop-blur-sm bg-grey-bg rounded-md text-left p-4">
          <FontAwesomeIcon icon={faEnvelope} className="icons-size self-center" />
            <span className="text-center mb-1 font-bold">
             parkar.rachana@gmail.com
            </span>
            <a href="mailto:parkar.rachana@gmail.com" className=" text-center mb-1 font-bold hover:text-white hover:cursor-pointer">Send a message</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
