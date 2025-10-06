import React from "react";
import bannerImg from "../assets/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[50vh] rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-50">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="gap-60">
          <h1 className="text-5xl font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn bg-green-600 text-white">View The List</button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
