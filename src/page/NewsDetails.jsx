import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import SingleNewsDetails from "./SingleNewsDetails";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState();
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findNews = data?.find((news) => news.id == id);
    setNewsData(findNews);
  }, [data, id]);
  console.log(newsData);

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto mt-8">
        <div className="col-span-9">
          <SingleNewsDetails newsData={newsData}></SingleNewsDetails>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
