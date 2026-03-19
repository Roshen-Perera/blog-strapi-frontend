import { Suspense } from "react";
import Articles from "./ui/articles";

const getArticles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
  );
  const articles = await response.json();
  return articles;
};

const page = () => {
  const articles = getArticles();
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">
        Next.js and Strapi Integration
      </h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Articles articles={articles} />
      </Suspense>
    </div>
  );
};

export default page;
