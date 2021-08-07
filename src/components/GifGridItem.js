import React from "react";

const GifGridItem = ({ title, url }) => {
  //console.log({ title, url });
  //return <div>{img.title}</div>;
  return (
    <div className="card animate__fadeInUpBig">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
