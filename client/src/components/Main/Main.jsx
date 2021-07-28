import React from "react";
import "./Main.css";
import { Notepad } from "../../assets";

export default function Main() {
  return (
    <div className="main-welcome-container">
      <section className="main-welcome-section">
        <img src={Notepad} alt="notepad" className="main-img"></img>
        <div className="main-section-text-container">
          <span className="main-section-text">Lyricsheet.io</span>
          <span className="main-section-subtext">
            A lyric writing experience.
          </span>
          <div className="main-section-text-border-bottom" />
        </div>
      </section>
    </div>
  );
}
