import React from "react";
import Link from "next/link";
async function getBook(id) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}

export default async function page({ params, searchParams }) {
  const { id } = params;
  const book = await getBook(id);
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="text-4xl font-bold text-lime-400 text-center mb-10 pt-10">
          <h2>Book Summary Page</h2>
        </div>
        <div className="">
          <h2 key={book.id} className="text-orange-500 font-bold text-4xl mb-5">
            {book.name}
          </h2>
          <p className="mb-5 text-2xl grid md:grid-cols-2">
            <small className="text-blue-500 mb-5" key={book.id}>
              <span className="font-bold text-gray-900">Author:</span>{" "}
              {book.author}
            </small>

            <small key={book.id} className="text-blue-400">
              <span className="font-bold text-gray-900">Category:</span>{" "}
              {book.type}
            </small>
          </p>
          <div className="mb-10 grid md:grid-cols-2 gap-3">
            <small
              key={book.id}
              className="inline-block py-2 px-5 text-2xl rounded bg-green-500 mb-5 md:mb-0 text-center text-white"
            >
              Price: ${book.price}
            </small>
            <small
              key={book.id}
              className="inline-block py-2 px-5 text-2xl rounded bg-green-500 text-center text-white"
            >
              {/* ternary operator */}
              Available: {book.available === true ? "Yes" : "No"}
            </small>
          </div>
          <Link
            href="/"
            className="block py-3 text-center px-5 rounded bg-white border shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}