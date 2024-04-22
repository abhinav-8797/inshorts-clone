import React from "react";
import Container from "@mui/material/Container";
import "./NewsContent.css";
import NewsCard from "./NewsCard";

function Newscontent({ newsResults, newsArray, setLoadMore, loadMore }) {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downlaodText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            height="80%"
            alt="logo"
            className="img"
          ></img>
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            height="80%"
            alt="logo"
            className="img"
          ></img>
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              onClick={() => setLoadMore(loadMore + 20)}
              className="loadmore"
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
}

export default Newscontent;
