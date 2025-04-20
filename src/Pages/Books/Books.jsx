import React, { useContext } from "react";
import { DataContext } from "../../Components/Home/Home";
import Book from "../Book/Book";

const Books = () => {
  const booksData = useContext(DataContext);
  // console.log(booksData);
  return (
    <div className="mt-24">
      <h2 className="font-semibold text-4xl text-center playfair mb-9">
        Books
      </h2>
      <div className="grid grid-cols-3 gap-16">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
