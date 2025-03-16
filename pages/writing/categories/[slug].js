import React, { useEffect, useState } from "react";
import Head from "next/head";
import { client } from "../../../client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setCategoryData } from "../../../store/slices/WritingSlice";

/* action */
import {
  setStartLoading,
  setStopLoading,
} from "../../../store/slices/LoadingSlice";

/* Hook */
import CalPaginate from "../../../hooks/CalPaginate";

/* Layout */
import { WritingByCategoryPageLayout } from "../../../Layouts";

const SearchByCategory = ({ category, slug }) => {
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.writingData);

  const [articleData, setArticleData] = useState(null);
  const [dataCount, setDataCount] = useState(null);
  const [arctLoading, setArctLoading] = useState(false);

  const router = useRouter();
  const pageNumber = parseInt(router.query.page) || 1;

  const { startIndex, endIndex, pages, noItems } = CalPaginate(
    dataCount,
    pageNumber
  );

  useEffect(() => {
    dispatch(setStartLoading());

    const query = '*[_type == "category"]';

    if (categoryData.length === 0) {
      client.fetch(query).then((data) => {
        dispatch(setCategoryData(data));
        dispatch(setStopLoading());
      });
    } else {
      dispatch(setStopLoading());
    }
  }, []);

  useEffect(() => {
    dispatch(setStartLoading());
    setArctLoading(true);

    client
      .fetch(
        `count(*[_type == "article" && "${category?._id}" in categories[]._ref])`
      )
      .then((count) => {
        setDataCount(count);

        if (count <= 6) {
          if (startIndex !== null && endIndex !== null) {
            const query = `*[_type == "article" && "${category?._id}" in categories[]._ref] | order(_createdAt desc) {title, _createdAt,titleImage, categories,slug}`;

            client.fetch(query).then((data) => {
              setArticleData(data);
              dispatch(setStopLoading());
              setArctLoading(false);
            });
          }
        } else {
          if (startIndex !== null && endIndex !== null) {
            const query = `*[_type == "article" && "${category?._id}" in categories[]._ref] | order(_createdAt desc) [${startIndex}...${endIndex}] {title, _createdAt,titleImage, categories,slug}`;

            client.fetch(query).then((data) => {
              setArticleData(data);
              dispatch(setStopLoading());
              setArctLoading(false);
            });
          }
        }
      });
  }, [categoryData, slug, pageNumber, startIndex, endIndex]);

  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2340030299315656" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta
          name="title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          name="description"
          content={`Read my ${category?.title} articles on full-stack development, blockchain, AI, and software engineering insights.`}
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, web development, blockchain, AI, MERN, MEAN, MENN, software engineering, coding, programming, articles"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        <title>{category?.title} | Articles by category</title>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://umaajay.netlify.app/writing/categories/${slug}`}
        />
        <meta
          property="og:title"
          content={`${category?.title} | Articles by category`}
        />
        <meta
          property="og:description"
          content={`Read my ${category?.title} articles on full-stack development, blockchain, AI, and software engineering insights.`}
        />
        <meta property="og:image" content="../meta-umaajay.png" />
      </Head>
      <main>
        <WritingByCategoryPageLayout
          data={articleData}
          category={category}
          pageNumber={pageNumber}
          pages={pages}
          noItems={noItems}
          slug={slug}
          loading={arctLoading}
        />
      </main>
    </>
  );
};

export default SearchByCategory;