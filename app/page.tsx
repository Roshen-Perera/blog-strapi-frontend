import React from "react";

async function page() {
  const response = await fetch("http://localhost:1337/api/articles?populate=*");
  const articles = await response.json();
  return <div></div>;
};

export default page;
