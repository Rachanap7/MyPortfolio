import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faListUl,
  faRectangleList,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { SiJavascript,SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function App() {
  const [activeTab, setActiveTab] = useState("#");
  return (
    <main>
      <div
        className="m-8 md:ml-20 flex justify-start gap-8 md:items-center h-full md:flex-row flex-col"
        id="home"
      >
        <div className="flex flex-col md:items-start items-center">
          <span className="text-2xl text-regal-blue-4">Hello, I am</span>
          <span className="myName">Rachana Ramakant Parkar</span>
          <div className="flex gap-4">
            <span className="skills-icon cursor-pointer skills-icon-hover"><FaReact/></span>
            <span className="skills-icon cursor-pointer skills-icon-hover"><SiRedux/></span>
            <span className="skills-icon cursor-pointer skills-icon-hover"><SiJavascript/></span>
          </div>
        </div>
        <div className="md:ml-auto">
          <ul className="text-white font-medium flex gap-2">
            <li className="p-2 rounded text-center flex-auto navBtn skills-icon-hover">
              <a  href="#contact" className="">
                Contact Me
              </a>
            </li>
            <li className="p-2 rounded text-center flex-auto navBtn skills-icon-hover">
              <a
                href="/Rachana-Parkar_Resume.pdf"
                target="_blank"
                className=""
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <MyProjects />
      <ContactMe />
      <Footer />
      <div className=" fixed bottom-8 flex justify-center w-full">
       <div className="rounded-full backdrop-blur-sm bg-regal-blue-4 flex justify-center gap-3 pl-3 p-1 pr-3">
       <div
          className={`self-center ${activeTab === "#" ? "active text-white" : "text-black"}`}
        >
          <a href="#home" onClick={() => setActiveTab("#")}>
            <FontAwesomeIcon icon={faHouse} className="icons-size2" />
          </a>
        </div>
        <div
          className={`self-center ${activeTab === "#experience" ? "active text-white" : "text-black"}`}
        >
          <a href="#experience" onClick={() => setActiveTab("#experience")}>
            <FontAwesomeIcon icon={faAddressBook} className="icons-size2" />
          </a>
        </div>
        <div
          className={`self-center ${activeTab === "#contact" ? "active text-white" : "text-black"}`}
        >
          <a href="#contact" onClick={() => setActiveTab("#contact")}>
            <FontAwesomeIcon icon={faUser} className="icons-size2" />
          </a>
        </div>
        <div
          className={`self-center ${activeTab === "#skills" ? "active text-white" : "text-black"}`}
        >
          <a href="#skills" onClick={() => setActiveTab("#skills")}>
            <FontAwesomeIcon icon={faListUl} className="icons-size2" />
          </a>
        </div>
        <div
          className={`self-center ${activeTab === "#projects" ? "active text-white" : "text-black"}`}
        >
          <a href="#projects" onClick={() => setActiveTab("#projects")}>
            <FontAwesomeIcon icon={faRectangleList} className="icons-size2" />
          </a>
        </div>
       </div>
      </div>
    </main>
  );
}
