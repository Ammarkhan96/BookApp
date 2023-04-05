import { Open_Sans } from "next/font/google";
import Link from "next/link";
const Opensans = Open_Sans({ subsets: ["latin"] });
async function getBooks() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getBooks();
  return (
    <main className={Opensans.className}>
      <div className="w-[90%] md:w-[90%] mx-auto py-10">
        <div className="text-center">
          <h2 className="text-4xl text-lime-400 uppercase font-bold">
            Book App
          </h2>
          <small>Ammar Khan</small>
          <p>
            <strong>src:</strong> https://simple-books-api.glitch.me/books{" "}
          </p>
        </div>
        <div className="my-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((book, key) => {
            return (
              <div className="bg-white border shadow-lime-100 shadow-lg p-5 rounded">
                <ul>
                  <li key={key}>
                    <strong>Book Title:</strong> {book.name}
                  </li>
                  <li key={key}>
                    <strong>Book Type: </strong> {book.type}
                  </li>
                </ul>
                <Link
                  href={`${book.id}`}
                  className="inline-block px-5 py-2 mt-5 border shadow-sm hover:shadow-xl"
                >
                  Buy
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}