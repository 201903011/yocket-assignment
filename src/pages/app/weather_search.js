import { useState, useEffect } from "react";
// form
import { useForm } from "react-hook-form";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getWeatherByCity } from "../../redux/slices/game";
//
import useIsMountedRef from "../../hooks/use_ismounted_ref";
import InfoCard from "../../sections/app/infocard";
// import { Page } from "../../components/page";
import { Page } from "../../components/page";
import { Dropdown } from "../../components/dropdown";

const selectedEventSelector = (state) => {
  const { weather } = state;
  // console.log(weather);
  if (weather != null) {
    return weather;
  }
  return null;
};

function WeatherSearch() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const weatherData = useSelector(selectedEventSelector);

  useEffect(() => {
    // dispatch(getWeatherByCity());
  }, [dispatch]);

  const isMountedRef = useIsMountedRef();

  const defaultValues = {
    city: "Mumbai",
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(getWeatherByCity(data.city));
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError("afterSubmit", {
          ...error,
          message: error.response.statusText,
        });
      }
    }
  };
  const isDesktop = true;

  return <></>;
}

export default WeatherSearch;
