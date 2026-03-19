import React from 'react'
// Path: ./src/app/page.tsx

import Image from "next/image";

// Path: ./src/app/page.tsx

const response = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
);
const articles = await response.json();

// Path: ./src/app/page.tsx

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const page = () => {
  
  return (
    <div>
      
    </div>
  )
}

export default page
