/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faJava,
  faJenkins,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm an experienced QA Engineer with over 2 years of hands-on testing
            experience in both manual and automated testing environments.
          </p>
          <p>
            Ambitious QA Automation Engineer with a passion for optimizing
            software quality through innovative test automation.
          </p>
          <p>
            Experienced in designing and integrating automated tests across
            various frameworks and CI/CD pipelines.
          </p>
          <p> Dedicated to enhancing software reliability and efficiency.</p>
          <p>
            Tech-obsessed and bike enthusiast, blending a passion for technology
            and the thrill of the ride.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJenkins} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
