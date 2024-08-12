import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

// Here we have passed category props bcz we want :
// That in Our weboste we have different categories for news .
// We will also change our URL and pass category
function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(
    () => {
      const fetchArticles = async () => {
        const apiKey = import.meta.env.VITE_API_KEY; // Using Vite's method to access environment variables
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        // This is using .then method But we will be using async-await
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((data) => setArticles(data.articles));
        const response = await fetch(url);
        const data = await response.json();
        // After the upper line of code we will get a promise that is Our data we have article array.
        setArticles(data.articles);
      };

      fetchArticles();
    },
    // We want to run our useEffect when our category gets updated
    [category]
  );

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger fs-5">News</span>
      </h2>
      {/* Now here we will map article array using newsItem component.*/}
      {/* What is its purpose of using here. */}
      {/* By using this we will get individual news.....from article we will get individual news */}
      {/* And in this individual news we will be returned ...author name,title,description and more. We will pass this details using props. */}
      {/* And this value  We Are passing from NewsAPI website.*/}
      {articles.map((article, idx) => {
        return (
          <NewsItem
            key={idx}
            title={article.title}
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        );
      })}
    </div>
  );
}
export default NewsBoard;
