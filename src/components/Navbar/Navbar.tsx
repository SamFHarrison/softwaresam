"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { RoutePaths } from "@/constants/constants";

export const NavTabs = [
  { id: "projects", label: "Projects", path: RoutePaths.Projects },
  { id: "home", label: "Home", path: RoutePaths.Home },
  { id: "articles", label: "Articles", path: RoutePaths.Articles },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(NavTabs[1].id);

  const router = useRouter();

  return (
    <nav className="pill">
      {NavTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            router.push(tab.path);
          }}
          className={clsx(activeTab === tab.id ? "tab-active" : "", "tab")}
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
