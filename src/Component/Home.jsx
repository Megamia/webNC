import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div id="container" className="bg-[#253238] flex h-screen justify-center">
      <div id="main" className="w-[1920px] justify-center flex bg-[#141414] p-[20px] mt-[20px]">
        <div className="bg-[#2D2D2D] h-[100px] w-full">
          <span className="text-red-100">
            <FontAwesomeIcon icon={faBullhorn} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;