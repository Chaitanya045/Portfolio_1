/* eslint-disable no-unused-vars */
import { useRef } from "react";
import LogoC from "../../../assets/images/logo-c.png";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoC}
        alt="Automation,  Tester"
      />
    </div>
  );
};

export default Logo;
