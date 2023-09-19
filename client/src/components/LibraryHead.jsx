import { useState } from "react";
import axios from "axios";
import LibraryCard from "./LibraryCard";
import LibraryNavbar from "./LibraryNavbar";

const LibraryHead = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBCcY6LCFypsZgBz3MVmHn1dDGLLAYrCN0`
      )
      .then((data) => {
        setData(data.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LibraryNavbar />
      <div
        className="container-fluid text-center  border-0 mt-8 pt-5"
        style={{ height: "300px" }}
      >
        <div className="card-body m-auto w-1/2">
          <h5 className="text-3xl font-semibold mb-4">
            Find a Book of Your Choice
          </h5>
          <p className="text-lg mb-4">
            You want weapons? We’re in a library. Books are the best weapon in
            the world. This room’s the greatest arsenal we could have. Arm
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
  );
};

export default LibraryHead;
