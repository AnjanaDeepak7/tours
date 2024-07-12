import React from "react";
import Tour from "./Tour";
import { useState } from "react";
import data from "./data";

const Tours = () => {
  const [tours, setTours] = useState(data);
  console.log(tours);
  return (
    <section>
      {tours.map((tour) => {
        return (
          <Tour key={tour.id} {...tour} tours={tours} setTours={setTours} />
        );
      })}
    </section>
  );
};

export default Tours;
