import React from "react";
import "@/components/AISam/AISam.css";
import Arrow from "@/assets/Icons";

function AISam() {
  return (
    <div className="glass-screen">
      <div className="input-wrapper">
        <input type="text" placeholder="Chat with Sam..." />
        <button className="send-button" type="submit">
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default AISam;
