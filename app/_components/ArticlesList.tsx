"use client";

import { use } from "react";
import Image from "next/image";

export interface Article {
  id: number;
  title: string;
  content: string;
  cover?: {
    url: string;
  };
  publishedAt: string;
}

export default function ArticlesList({
  articles,
}: {
  articles: Promise<{ data: Article[] }>;
}) {
  const allArticles = use(articles);
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  
  const articleList = allArticles?.data || [];
  
  if (articleList.length === 0) {
    return <div className="text-center py-8">No articles found</div>;
  }
  
  return (
    <ul>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articleList.map((article) => (
            <article
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {article.cover && (
                <Image
                  className="w-full h-48 object-cover"
                  src={process.env.NEXT_PUBLIC_STRAPI_URL + article.cover.url}
                  alt={article.title}
                  width={180}
                  height={38}
                  priority
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <p className="text-sm text-gray-500">
                  Published: {formatDate(article.publishedAt)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ul>
  );
}
