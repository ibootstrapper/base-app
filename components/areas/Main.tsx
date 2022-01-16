import React from "react";
import Authentication from "./main/Authentication";
import { Header4 } from "../primitives/Base";
import CardCollection from "../primitives/CardCollection";
export default function Main() {
  return (
    <>
      <div className="flex justify-center md:justify-end">
        {Authentication()}
      </div>
      <div className="mt-4">{Header()}</div>
      {Header4("Latest Recipes")}
      {CardCollection()}
      {Header4("Most Popular")}
      {CardCollection()}
      <div className="mt-12 flex justify-center">{LoadMoreButton()}</div>
    </>
  );

  function Header() {
    return (
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold leading-none tracking-wider">
          Recipes
        </h2>
        <h3 className="text-2xl font-semibold tracking-wider">For Ninjas</h3>
      </header>
    );
  }

  function LoadMoreButton() {
    return (
      <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
        Load more
      </div>
    );
  }
}
