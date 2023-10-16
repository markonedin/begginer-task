import React, { useState } from "react";

const BrojacTaskova = ({ image }) => {
  const [broj, setBroj] = useState(0);

  const povecaj = () => {
    setBroj(broj + 1);
  };

  const smanji = () => {
    setBroj(broj - 1);
  };

  const resetuj = () => {
    setBroj(0);
  };

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <h2 className="title is-4">Task countdown: {broj}</h2>
          <button onClick={povecaj}>Increase</button>
          <button onClick={smanji}>Decrease</button>
          <button onClick={resetuj}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default BrojacTaskova;
