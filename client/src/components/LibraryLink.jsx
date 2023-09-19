const LibraryLink = () => {
  return (
    <div>
      <div className="card text-center cardHeaderEdit border-0">
        <div className="card-header border-0">
          <h3 className="pt-4 text-3xl font-semibold">ＢＯＯＫＨＥＲＯ</h3>
        </div>
        <div className="card-body border-0">
          <h3 className="card-title mb-3 text-2xl">
            Find the Book of Your Choice
          </h3>
          <p className="card-text mb-0 text-lg">
            Escape to a world of stories, where dreams take flight and knowledge
            knows no bounds
          </p>
          <p className="card-text mb-3 text-lg">
            Experience it all through your library app.
          </p>
          <button className="bg-blue-500 px-4 py-2 rounded-full text-lg text-white mt-2 font-bold">
            <a href="/library" className="">
              Explore Library
            </a>
          </button>
        </div>
        <div className="card-footer pb-5 border-0 text-gray-500">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LibraryLink;
