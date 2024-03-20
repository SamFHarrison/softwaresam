"use client";

import { RoutePaths } from "@/constants/constants";
import { useRouter } from "next/navigation";
import React from "react";
import "./articles.css";
import { Search } from "@/assets/Icons";

function Article() {
  const router = useRouter();
  return (
    <section className="articles-container glass-effect">
      <div className="side-bar">
        {/* // TODO: Search, Filter + Sort Feature */}
        <ul className="article-sidebar">
          <li onClick={() => router.push(RoutePaths.Articles)}>
            <p className="title">Article Title</p>
            <p className="date">10th March &apos;24</p>
            {/* // TODO: Notification indicator  */}
          </li>
        </ul>
      </div>
      <div className="divider" />
      <div className="article-post">
        <h1>Hi Im an article</h1>
      </div>
    </section>
  );
}

export default Article;
