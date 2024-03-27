import { RoutePaths } from "@/constants/constants";
import { useRouter } from "next/navigation";
import React from "react";

interface ArticleSnippetProps {
  title: string;
  date: string;
}

function ArticleSnippet({ title, date }: ArticleSnippetProps) {
  const router = useRouter();

  return (
    <li onClick={() => router.push(RoutePaths.Articles)}>
      <p className="title">{title}</p>
      <p className="date">{date}</p>
      {/* // TODO: Notification indicator  */}
    </li>
  );
}

export default ArticleSnippet;
