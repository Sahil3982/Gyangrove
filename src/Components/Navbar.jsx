/* eslint-disable react/jsx-indent */
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between p-2 mb-4 px-10">
        <section className=" flex flex-col gap-4">
          <div className="text-red-500 text-2xl font-extrabold">BookUsNow</div>
          <div>Mumbai, India  </div>
        </section>
        <section className="flex flex-col" >
          <article className="flex mb-4">
            <div className="bg-black text-white p-1 rounded-lg flex flex-row px-3"><i className="fa-sharp fa-thin fa-bars p-1 pr-2"></i><span>Categories</span></div>
            <div className="px-5  border-solid "><input type="text" placeholder="Dj Phantom" className="w-96 px-5 border-gray  rounded-lg border-2 p-1 border-solid " ></input></div>
          </article>
          <article className="flex gap-5">
            <div>Live shows</div>
            <div>Streams</div>
            <div>Movies</div>
            <div>Plays</div>
            <div>Events</div>
            <div>Sports</div>
            <div>Activities</div>
          </article>
        </section>
        <section className="flex gap-5">
          <div className=" p-1 flex justify-center align-center "><i className="fa-solid fa-heart pt-1 pr-2 text-gray-400"></i><span>Favoites</span></div>
          <div>
            <button className="rounded-lg  border-gray  rounded-lg border-2 p-1  border-solid  ">Sign In</button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
