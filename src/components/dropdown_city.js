// src/App.js
import { useDispatch } from "../redux/store";
import { setCityforCop } from "../redux/slices/game";

export default function DropdownCity({ label, options, selectedID, copID }) {
  // console.log(options);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setCityforCop(copID, event.target.value));
  };

  return (
    <div className="pt-2">
      <select
        // id="countries"
        onChange={handleChange}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option
          className="p-4 bg-white dark:bg-gray-900 rounded shadow"
          disabled={true}
          selected={selectedID == null ? "selected" : ""}
          hidden
        >
          {label}
        </option>
        {Object.keys(options).map((key) => {
          const cityData = options[key];
          return (
            <option
              value={key}
              key={key}
              className="p-4 bg-white dark:bg-gray-900 rounded shadow"
              disabled={!cityData.avl}
              selected={selectedID == key ? "selected" : ""}
            >
              {cityData.city}
            </option>
          );
        })}
      </select>
    </div>
  );
}
