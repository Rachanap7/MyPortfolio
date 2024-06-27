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

export default function App() {
  const[activeTab,setActiveTab]=useState('#');
  return (
    <main>
      <div className="m-8 ml-40 flex justify-start gap-8 items-center h-full" id="home">
        {/* <div className="w-full max-w-32 h-1/2">
          <img
            src={"/NavPhoto1.jpg"}
            alt="NavPhoto1"
            className="rounded-3xl h-auto max-w-full mx-auto block"
          ></img>
        </div> */}
        <div className="flex flex-col">
          <span className="text-2xl text-skin-tone1">Hello, I am</span>
          <span className="myName">Rachana Parkar</span>
        </div>
        <div className="ml-auto">
          <ul className="text-ruby text-xl font-bold divide-x flex hover:divide-pink-400 border-style: double">
            <li className="menuHover p2 text-center flex-auto w-64">
              <button className="rounded-lg hover:bg-white hover:text-black hover:p-2">
                Contact Me
              </button>
            </li>
            <li className="menuHover p2 text-center flex-auto w-64">
              <a
                href="/Rachana-Parkar_Resume.pdf"
                target="_blank"
                className="rounded-lg hover:bg-white hover:text-black hover:p-2"
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
      <div className="rounded-full w-1/4 h-16 backdrop-blur-sm bg-grey-bg fixed left-[37.5%] bottom-8 flex justify-evenly pt-1">
      <a href="#home" onClick={() => setActiveTab('#')} className={activeTab === '#' ? 'active icons-size self-center ': 'icons-size self-center'}>
          <FontAwesomeIcon icon={faHouse} className="icons-size" />
        </a>
        <a href="#experience" onClick={() => setActiveTab('#experience')} className={activeTab === '#experience' ? 'active icons-size self-center ': 'icons-size self-center'}>
          <FontAwesomeIcon icon={faAddressBook} className="icons-size" />
        </a>
        <a href="#contact" onClick={() => setActiveTab('#contact')} className={activeTab === '#contact' ? 'active icons-size self-center ': 'icons-size self-center'}>
          <FontAwesomeIcon icon={faUser} className="icons-size" />
        </a>
        <a href="#skills" onClick={() => setActiveTab('#skills')} className={activeTab === '#skills' ? 'active icons-size self-center ': 'icons-size self-center'}>
          <FontAwesomeIcon icon={faListUl} className="icons-size" />
        </a>
        <a href="#projects" onClick={() => setActiveTab('#projects')} className={activeTab === '#projects' ? 'active icons-size self-center ': 'icons-size self-center'}>
          <FontAwesomeIcon icon={faRectangleList} className="icons-size" />
        </a>
      </div>
    </main>
  );
}
