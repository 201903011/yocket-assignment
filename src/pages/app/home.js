import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import Page from "../../components/page";

function WeatherSearch() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/yocket/game");
  };

  return (
    <>
      <Page>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-20 text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Lets Start the Journey
            </p>
            <p className="mt-6 mb-6 text-lg leading-8 text-gray-600  dark:text-gray-400 ">
              It is a standard test game designed to help identify the thief.
              This interactive challenge assesses your detective skills through
              various scenarios and clues to solve the mystery.
            </p>
            <CustomButton label={"Lets Play"} onTap={handleNavigate} />
          </div>
        </div>
      </Page>
    </>
  );
}

export default WeatherSearch;
