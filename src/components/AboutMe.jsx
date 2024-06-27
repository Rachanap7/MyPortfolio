import { useState } from "react";

const AboutMe = () => {
  const [openMe, setOpenME] = useState(false);
  return (
    <div className="max-w-full m-8 ml-40">
      <div className="p-4 w-1/8 text-2xl font-sans text-gray-500 rounded-xl backdrop-blur-sm bg-grey-bg bold">
        <div
          onClick={() => setOpenME(!openMe)}
          className={`font-semibold text-slate-300 cursor-pointer ${openMe ? "" : "text-center"}`}
        >
          Are you curious about who I am?
        </div>
        {openMe && (
          <div className="flex justify-around">
            <p className="max-w-xl font-sans text-xl leading-relaxed mt-2 text-justify font-medium">
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
            <img
              src={"/NavPhoto.jpg"}
              alt="NavPhoto"
              className="rounded-xl max-h-96 max-w-full mx-auto block"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
