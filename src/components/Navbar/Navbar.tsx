"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import "./Navbar.css";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "home", label: "Home" },
  { id: "articles", label: "Articles" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  return (
    <div className="pill">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={clsx(activeTab === tab.id ? "" : "tab-active", "tab")}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="hi"
              className="motion"
              transition={{ duration: 0.7, type: "spring" }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
