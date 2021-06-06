import React from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../ShoesData";
import { NotFound } from "./NotFound";

export const ProductShowCase = () => {
  let { id } = useParams();
  let shoe = shoesData[id];

  if (!shoe) {
    return <NotFound />;
  }

  return (
    <div className="body-container">
      <h2>{shoe.name}</h2>
      <img src={shoe.img} alt={shoe.name} />
    </div>
  );
};
