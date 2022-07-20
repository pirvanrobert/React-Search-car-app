import CARS from "./MOCK_DATA.json";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchCar, setSearchCar] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search. . ."
        onChange={(event) => {
          setSearchCar(event.target.value);
        }}
      />
      {CARS.filter((val) => {
        if (searchCar === "") {
          return val;
        } else if (
          val.first_name
            .toLocaleLowerCase()
            .includes(searchCar.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{`${val.first_name} - ${val.last_name} :- ${val.car_descriptio}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
