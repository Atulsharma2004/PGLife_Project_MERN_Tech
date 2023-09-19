const Subscribe = () => {
  return (
    <div className="bg-teal-500">
      <h1 className="py-3 text-center text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
        Save time, save money!
      </h1>
      <div className="flex justify-center items-center p-4">
        <input
          type="search"
          className="w-64 md:w-80 lg:w-96 h-12 px-4 rounded-full focus:outline-none"
          placeholder="Your Email"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
