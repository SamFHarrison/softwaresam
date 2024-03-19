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
            <p className="">Article Title</p>
            <p className="description">10th March &apos;24</p>
          </li>
        </ul>
        <div className="divider" />
        <div className="article-post">Hi Im an article</div>
      </div>
    </section>
  );
}

export default Article;
