import PropTypes from "prop-types";

const LibraryCard = ({ book }) => {
  console.log(book);
  return (
    <div className="amit">
      {book &&
        book.map((item) => {
          console.log("bhaukal");
          let imageLink = item.volumeInfo.imageLinks;
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          if (thumbnail !== undefined || imageLink !== undefined) {
            return (
              <div key={item.id} className="cardFlex">
                <div className="bg-white rounded-lg shadow-lg p-4 m-2 w-64">
                  <img
                    src={thumbnail || "placeholder_image_url"}
                    className="w-full h-48 object-cover"
                    alt="cover_img"
                  />
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold">
                      {item.volumeInfo.title}
                    </h5>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-5">
                      {item.volumeInfo.description}
                    </p>
                  </div>
                  <button className="bg-blue-500 px-4 py-1 rounded-full text-lg text-white mt-4 font-bold">
                    <a href={item.volumeInfo.infoLink} className="">
                      More ...
                    </a>
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

LibraryCard.propTypes = {
  book: PropTypes.array.isRequired,
};

export default LibraryCard;
