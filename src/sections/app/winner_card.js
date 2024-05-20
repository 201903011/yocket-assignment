import React from "react";
import { useSelector } from "react-redux";

const selectedEventSelector = (state) => {
  const { game } = state;
  // console.log(weather);
  if (game != null) {
    return game;
  }
  return null;
};

export default function WinnerCard({ name, city, car }) {
  const gameData = useSelector(selectedEventSelector);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
        Winner is {name}
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-300">
        He arreseted the theif in city {gameData.cityOptions[city].city} by
        their vehicle {gameData.carOptions[car].car} .
      </p>
    </div>
  );
}
