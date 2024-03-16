"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import "./Navbar.css";
import { useRouter } from "next/navigation";

const tabs = [
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "home", label: "Home", path: "/" },
  { id: "articles", label: "Articles", path: "/articles" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  const router = useRouter();

  return (
    <nav className="pill">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            router.push(tab.path);
          }}
          className={clsx(activeTab === tab.id ? "" : "tab-active", "tab")}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="active-tab-bubble"
              className="motion"
              transition={{ duration: 0.7, type: "spring" }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
