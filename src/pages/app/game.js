import React, { useEffect } from "react";
import Page from "../../components/page";
import { useDispatch, useSelector } from "../../redux/store";
import game, {
  hidetheif,
  resetGameState,
  startGameState,
} from "../../redux/slices/game";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/custom_button";
import CopInputCard from "../../sections/app/cop_input_card";
import WinnerCard from "../../sections/app/winner_card";
import NoWinnerCard from "../../sections/app/no_winner_card";

const selectedEventSelector = (state) => {
  const { game } = state;
  // console.log(weather);
  if (game != null) {
    return game;
  }
  return null;
};

function MainMap() {
  const dispatch = useDispatch();

  const gameData = useSelector(selectedEventSelector);
  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/yocket/dashboard");
  };

  const startGame = () => {
    try {
      var isValid = true;
      Object.keys(gameData.copData).map((key) => {
        const copData = gameData.copData[key];
        if (copData.city == null || copData.car == null) {
          console.log(copData);
          isValid = false;
        } else {
          isValid = true;
        }
      });
      if (isValid) {
        dispatch(hidetheif());
        var winner = null;
        Object.keys(gameData.copData).map((key) => {
          const copData = gameData.copData[key];
          if (copData.city == gameData.thief) {
            winner = { name: key, cop: copData };
          }
        });
        dispatch(startGameState(winner));
      } else {
        alert("Enter All Field");
      }
    } catch (error) {}
  };

  const resetGame = async () => {
    dispatch(resetGameState());
  };
  return (
    <Page title="MainMap">
      <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <CopInputCard copID={"cop1"} />
        <CopInputCard copID={"cop2"} />
        <CopInputCard copID={"cop3"} />
      </div>
      <div className="pr-4 pl-4">
        <CustomButton label={"Back"} onTap={handleNavigate} />
        <CustomButton
          label={gameData.isResulted ? "Play Again" : "Start "}
          onTap={startGame}
        />
        <CustomButton label={"Reset"} onTap={resetGame} />
      </div>
      {gameData.thief != null ?? <div>Result</div>}
      {gameData.isResulted == true ? (
        gameData.winner != null ? (
          <WinnerCard
            name={gameData.winner.name}
            city={gameData.winner.cop.city}
            car={gameData.winner.cop.car}
          />
        ) : (
          <NoWinnerCard />
        )
      ) : (
        <></>
      )}
    </Page>
  );
}

export default MainMap;
