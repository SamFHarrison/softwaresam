"use client";

import React from "react";
import "./articles.css";
import ArticleSnippet from "@/components/article/ArticleSnippet";

function Article() {
  return (
    <section className="articles-container glass-effect">
      <div className="side-bar">
        {/* // TODO: Search, Filter + Sort Feature */}
        <ul className="article-sidebar">
          <ArticleSnippet title="My first article" date="27th March '24" />
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
