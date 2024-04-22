import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";
import Newscontent from "./components/Newscontent";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsresults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const country = "in";
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d827158ac02e4b6d80b31776d523df58&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsresults(news.data.totalResults);
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadMore]);
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <Newscontent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
    </div>
  );
}

export default App;
