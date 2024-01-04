import React, { useEffect } from "react";
import Newscard from "./Newscard";
import { useState } from "react";

const News = (props) => {
  const [pages, setpages] = useState(1);
  const [articles, setarticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=772d25d2cecb471c929f90a8f970202d&category=${props.category}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };

  const handleNext = async () => {
    setpages(pages + 1);
    console.log(pages);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=772d25d2cecb471c929f90a8f970202d&category=${props.category}&page=${
      pages + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePrevious = async () => {
    setpages(pages - 1);
    console.log(pages);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=772d25d2cecb471c929f90a8f970202d&category=${props.category}&page=${
      pages - 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <div className="conntainer mx-2 my-3">
        <h2 className="text-center">
          Top News - {capitalizeFirstLetter(props.category)}
        </h2>
      </div>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-3" key={element.url}>
              <Newscard
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between mx-5 my-2">
        <button
          type="button"
          disabled={pages <= 1}
          className="btn btn-dark"
          onClick={handlePrevious}
        >
          &#x2190; Previous
        </button>
        <button
          type="button"
          disabled={pages + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-dark"
          onClick={handleNext}
        >
          Next &#x2192;
        </button>
      </div>
    </>
  );
};

export default News;
