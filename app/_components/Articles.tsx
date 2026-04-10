import { Suspense } from "react";
import ArticlesList from "./ArticlesList";

const getArticles = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
    );
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return { data: [] };
  }
};

const AllArticles = () => {
  const articles = getArticles();
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">
        Next.js and Strapi Integration
      </h1>
      <Suspense fallback={<div>Loading....</div>}>
        <ArticlesList articles={articles} />
      </Suspense>
    </div>
  );
};

export default AllArticles;
