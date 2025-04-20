import React, { createContext } from "react";
import Banner from "../../Pages/Banner/Banner";
import Books from "../../Pages/Books/Books";
import { useLoaderData } from "react-router";

export const DataContext = createContext([]);

const Home = () => {
  const booksData = useLoaderData();
  //   console.log(booksData);
  return (
    <div>
      <DataContext value={booksData}>
        <Banner></Banner>
        <Books></Books>
      </DataContext>
    </div>
  );
};

export default Home;
