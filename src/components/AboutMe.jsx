import { useState } from "react";

const AboutMe = () => {
  const [openMe, setOpenME] = useState(false);
  return (
    <div className="m-8 md:ml-20 overflow-hidden">
      <div 
      onClick={() => setOpenME(!openMe)} className={`max-w-full max-h-full p-4 text-2xl font-sans text-white bold cursor-pointer rounded-xl shadow-custom ${openMe ? "backdrop-blur-sm bg-regal-blue" : "border-2 border-solid border-white skills-icon-hover"}`}>
      {
        !openMe && (
        <div
          className={`font-semibold text-white ${openMe ? "" : "text-center"}`}
        >
          Are you curious about who I am?
        </div>
        )
      }
        {openMe && (
          <div className="flex justify-evenly md:gap-28 flex-wrap">
            <img
              src={"/NavPhoto.jpg"}
              alt="NavPhoto"
              className="rounded-xl max-h-80 max-w-full block"
            ></img>
            <p className="max-w-xl font-sans text-lg leading-relaxed mt-2 text-justify">
              Hello there! I've been working as a front-end developer for more
              than three years. I am working as a system engineer for Tata
              Consultancy Services at present. I have expertise of web
              development technologies such as HTML5, CSS3, Jquery, and
              JavaScript. Additionally, I've acquired quite a considerable
              proficiency in cutting edge technologies like Typescript, Tailwind
              CSS, SCSS, and React JS. I graduated from Mumbai University with a
              B.E. degree in information and technology. I'm quite good at
              working in cross-functional teams and achieving deadlines for
              projects. I pay close attention to the smallest aspects when
              making the very great apps.
            </p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
