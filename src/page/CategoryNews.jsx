import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    if (id == "0") {
      const allNews = data;
      setNews(allNews);
      return;
    } else if (id == "1") {
      const brakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setNews(brakingNews);
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      setNews(filterData);
    }
  }, [data, id]);

  return (
    <div>
      {news.map((singleNews) => (
        <NewsCard news={singleNews}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
