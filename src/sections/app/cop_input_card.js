import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownCity from "../../components/dropdown_city";
import DropdownCar from "../../components/dropdown_car";
import cop from "../../redux/slices/cop";

const selectedEventSelector = (state) => {
  const { game } = state;
  // console.log(weather);
  if (game != null) {
    return game;
  }
  return null;
};

export default function CopInputCard({ copID }) {
  //   console.log(info.data.main.temp);
  const dispatch = useDispatch();

  const gameData = useSelector(selectedEventSelector);
  useEffect(() => {
    // dispatch();
  }, [dispatch]);
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold dark:text-white ">{copID}</h1>
        <DropdownCity
          label="Select the City"
          options={gameData.cityOptions}
          selectedID={gameData.copData[copID].city}
          copID={copID}
        />
        <DropdownCar
          label="Select the Car"
          options={gameData.carOptions}
          selectedID={gameData.copData[copID].car}
          copID={copID}
        />
      </div>
    </>
  );
}
