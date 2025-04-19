import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
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
  } = book;
  //   console.log(
  //     author,
  //     bookId,
  //     bookName,
  //     category,
  //     image,
  //     publisher,
  //     rating,
  //     review,
  //     tags,
  //     totalPages,
  //     yearOfPublishing
  //   );
  return (
    <div className=" border border-[#13131326] rounded-2xl">
      <div className="card p-6">
        <div className="card-item bg-[#f3f3f3] rounded-2xl flex justify-center items-center py-9">
          <img className="h-44 w-32" src={image} />
        </div>
        <div className="card-item work font-medium text-[#43ff64d9] mt-6 mb-4 flex gap-5">
          {tags.map((tagName, index) => (
            <span className="bg-[#23be0a0d] px-4 py-2 rounded-full" key={index}>
              {tagName}
            </span>
          ))}
        </div>
        <div className="card-item space-y-4 border-b border-b-[#13131326] border-dashed">
          <h4 className="playfair text-2xl font-semibold">{bookName}</h4>
          <p className="text-[#131313cc] font-medium work mb-5">
            By : {author}
          </p>
        </div>
        <div className="card-item work mt-5 flex justify-between items-center text-[#131313cc] font-medium">
          <p>{category}</p>
          <div className="flex gap-2  ">
            <p>{rating}</p>
            <p className="text-xl">
              <FaRegStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
