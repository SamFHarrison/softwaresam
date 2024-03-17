import React from "react";
import "./AISam.css";
import { Arrow } from "@/assets/Icons";
import Image from "next/image";
import avatar from "@/../public/imgs/avatar.png";

function AISam() {
  return (
    <div className="container glass-effect">
      <div className="ai-sam-placeholder">
        <Image src={avatar} alt="Sam's avatar" />
        <h2>AISam</h2>
        <p>Coming June &apos;24</p>
      </div>

      {/* <div className="input-wrapper">
        <input type="text" placeholder="Ask me anything..." disabled />
        <button
          className="send-button"
          type="submit"
          aria-label="Send message button"
          disabled
        >
          <Arrow />
        </button>
      </div> */}
    </div>
  );
}

export default AISam;
