import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  // const [booksData, setBooksData] = useState([]);
  // const booksData = useContext(DataContext);
  const booksData = useLoaderData();
  // console.log(booksData);
  const { id } = useParams();
  // console.log(id);
  //   setSingleBookId(id);
  //   console.log(singleBookId);
  //   console.log(id);
  // useEffect(() => {
  //   fetch("../../../public/booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooksData(data));
  // }, []);
  // setSingleBookId(booksData);

  console.log(booksData);
  const singleBook = booksData.find((book) => book.bookId === parseInt(id));
  console.log(singleBook);
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleBook;
  return (
    <div className="flex gap-12 items-center justify-center">
      <div className="flex-1 bg-[#1313130d] p-20 rounded-2xl">
        <img className="h-[576px] mx-auto" src={image} alt="" />
      </div>
      <div className="flex-1">
        <div className="">
          <h1 className="playfair text-5xl font-semibold">{bookName}</h1>
          <h3 className="work text-xl font-medium text-[#131313cc] mt-4 mb-6 ">
            By : {author}
          </h3>
        </div>

        <div className="border-y border-y-[#13131326]">
          <h4 className="text-[#131313cc] my-4 text-xl font-medium work">
            {category}
          </h4>
        </div>
        <div className="border-b border-b-[#13131326]">
          <p className="work text-[#131313b3] text-justify my-6">
            <span className="font-semibold text-black">Review :</span> {review}
          </p>
          <p className="work flex gap-8 items-center mb-6 ">
            <span className="text-black font-semibold">Tag</span>
            {tags.map((tag, index) => (
              <span
                className="font-medium text-[#23BE0A] bg-[#23BE0A0D] py-2 px-4 rounded-4xl"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </p>
        </div>
        <div className=" work flex items-center gap-32 my-6 ">
          <div className="text-[#131313B3] space-y-3">
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year Of Publishing: </p>
            <p>Rating:</p>
          </div>
          <div className="space-y-3 text-black font-semibold">
            <p className="">{totalPages}</p>
            <p className="">{publisher}</p>
            <p className="">{yearOfPublishing}</p>
            <p className="">{rating}</p>
          </div>
        </div>

        <div className="flex gap-4 work">
          <button className="border border-[#1313134D] py-4 px-7 rounded-lg font-semibold cursor-pointer">
            Read
          </button>
          <button className="bg-[#59c6d2] py-4 px-7 text-white  font-semibold rounded-lg cursor-pointer">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
