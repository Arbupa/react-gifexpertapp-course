import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const CategoriesCollection = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__fadeInUpBig">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          // send all the img properties
          <GifGridItem key={img.id} {...img} />
          //return <li key={id}>{title}</li>;
        ))}
      </div>
    </>
  );
};

export default CategoriesCollection;
