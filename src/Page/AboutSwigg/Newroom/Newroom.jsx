import React from "react";
import "./Newroom.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Newroom = () => {
  return (
    <>
      <section id="Newroom">
        <div id="Newsroomheader-content">
          <h1>Newsroom</h1>
          <p className="Newrooms-para">Announcements and updates at Swiggy</p>
        </div>
        <button id="left-btn">
          <FaArrowLeft />
        </button>
        <button id="right-btn">
          <FaArrowRight />
        </button>
        <div id="Newsroom-content-slider">
          <div className="Newsroom-content-slider-cards">
            <div className="Newsroom-content-slider-card-first">
              <h1>First Card</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                quos ipsam laboriosam, eius nobis atque corporis, quod ducimus
                deleniti dignissimos temporibus modi labore placeat
                exercitationem eligendi! Eum eaque similique natus.
              </p>
              <button id="Newsroom-content-slider-card-first-btn">
                Learn More
              </button>
            </div>
            <div className="Newsroom-content-slider-card-second">
              <h1>Second Card</h1>
            </div>
          </div>
          <div className="Newsroom-content-slider-cards"></div>
          <div className="Newsroom-content-slider-cards"></div>
          <div className="Newsroom-content-slider-cards"></div>
          <div className="Newsroom-content-slider-cards"></div>
          <div className="Newsroom-content-slider-cards"></div>
        </div>
      </section>
    </>
  );
};
export default Newroom;
