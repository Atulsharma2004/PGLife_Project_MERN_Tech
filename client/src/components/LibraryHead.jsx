import { useState } from "react";
import axios from "axios";
import LibraryCard from "./LibraryCard";
import LibraryNavbar from "./LibraryNavbar";
const libraryApi = import.meta.env.VITE_LIBRARY_API_KEY;

const LibraryHead = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${libraryApi}`
      )
      .then((data) => {
        setData(data.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <LibraryNavbar />
      <div>
        <div className="container-fluid text-center  border-0 md:mt-8 md:pt-5 pb-4 md:pb-8">
          <div className="card-body m-auto w-1/2">
            <h5 className="text-3xl font-semibold mb-4">
              Find a Book of Your Choice
            </h5>
            <p className="text-lg mb-4">
              You want weapons? We are in a library. Books are the best weapon
              in the world. This room as the greatest arsenal we could have. Arm
              yourself!
            </p>
            <form className="flex justify-center" onSubmit={searchBook}>
              <input
                className="form-input w-1/2 px-4 py-2 rounded-l-md focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="The Lion King ..."
                aria-label="Search"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="container mx-auto mt-8">
          {bookData.length > 0 && <LibraryCard book={bookData} />}
        </div>
      </div>
    </>
  );
};

export default LibraryHead;
