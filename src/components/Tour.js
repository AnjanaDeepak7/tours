import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, tours, setTours }) => {
  const [readMore, setReadMore] = useState(false);

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <article className="tour" key={id}>
      <img src={image} alt={name} />
      <div className="title">
        <h4 className="heading">{name}</h4>
        <h5 className="price">${price}</h5>
      </div>
      <p className="info">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? `show less` : `show more`}
        </button>
      </p>
      <button className="btn" onClick={() => removeItem(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
