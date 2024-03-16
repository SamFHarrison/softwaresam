import React from "react";
import "@/components/AISam/AISam.css";
import Arrow from "@/assets/Icons";

function AISam() {
  return (
    <div className="glass-screen">
      <div className="input-wrapper">
        <input type="text" placeholder="Ask me anything..." />
        <button
          className="send-button"
          type="submit"
          aria-label="Send message button"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default AISam;
