import { createSlice } from "@reduxjs/toolkit";
// import { title } from 'process';
// utils
// import {axiosInstance as axios} from '../../utils/axios';;
//
import { dispatch } from "../store";
import axios from "axios";
import axiosInstance from "../../utils/axios";
import { start } from "nprogress";
import cop from "./cop";

// ----------------------------------------------------------------------
const initialState = {
  isLoading: false,
  error: null,
  isResulted: false,
  winner: null,
  thief: null,
  data: null,
  copData: {
    cop1: {
      city: null,
      car: null,
    },
    cop2: {
      city: null,
      car: null,
    },
    cop3: {
      city: null,
      car: null,
    },
  },
  carOptions: {
    car1: {
      car: "EV Bike",
      range: 60,
      avl: true,
    },
    car2: {
      car: "EV Car",
      range: 100,
      avl: true,
    },
    car3: {
      car: "EV SUV",
      range: 120,
      avl: true,
    },
    car4: {
      car: "EV Bike ",
      range: 60,
      avl: true,
    },
  },
  cityOptions: {
    city1: {
      city: "Yapkashnagar",
      range: 60,
      avl: true,
      key: "YAP",
    },
    city2: {
      city: "Lihaspur",
      range: 50,
      avl: true,
      key: "LIH",
    },
    city3: {
      city: "Narmis",
      range: 40,
      avl: true,
      key: "NAR",
    },
    city4: {
      city: "Shekharvati",
      range: 30,
      avl: true,
      key: "SHE",
    },
    city5: {
      city: "Nuravgram",
      range: 20,
      avl: true,
      key: "NUR",
    },
  },
  message: "",
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // available car
    getCar(state, action) {
      start.isLoading = false;
      const tempcopid = action.payload.copid;
      const tempcarid = action.payload.carid;
      // console.log(tempcopid);
      // console.log(tempcityid);

      if (state.copData[tempcopid].car != null) {
        state.carOptions[state.copData[tempcopid].car].avl = true;
      }
      state.carOptions[tempcarid].avl = false;

      state.copData[tempcopid].car = tempcarid;
    },

    getCity(state, action) {
      start.isLoading = false;
      const tempcopid = action.payload.copid;
      const tempcityid = action.payload.cityid;
      // console.log(tempcopid);
      // console.log(tempcityid);

      if (state.copData[tempcopid].city != null) {
        state.cityOptions[state.copData[tempcopid].city].avl = true;
      }
      state.cityOptions[tempcityid].avl = false;

      state.copData[tempcopid].city = tempcityid;
    },

    reset(state, action) {
      start.isLoading = false;
      state.copData = initialState.copData;
      state.carOptions = initialState.carOptions;
      state.cityOptions = initialState.cityOptions;
      state.winner = null;
      state.isResulted = false;
      state.thief = false;
    },

    startGame(state, action) {
      start.isLoading = false;
      state.winner = action.payload;
      state.isResulted = true;
    },
    hidetheif(state, action) {
      start.isLoading = false;
      const rndInt = Math.floor(Math.random() * 5) + 1;
      state.thief = `city${rndInt}`;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { getCar, getCity, reset, startGame, hidetheif } = slice.actions;

// ----------------------------------------------------------------------

export function setCarforCop(copID, carID) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    try {
      //   dispatch(slice.actions.issueBooks());
      dispatch(slice.actions.getCar({ copid: copID, carid: carID }));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function setCityforCop(copID, cityID) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    try {
      //   dispatch(slice.actions.issueBooks());
      console.log(cityID, copID);
      dispatch(slice.actions.getCity({ copid: copID, cityid: cityID }));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function resetGameState() {
  return async () => {
    try {
      dispatch(slice.actions.reset());
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function startGameState(winner) {
  return async () => {
    try {
      dispatch(slice.actions.startGame(winner));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function hideTheif() {
  return async () => {
    try {
      dispatch(slice.actions.hidetheif());
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
