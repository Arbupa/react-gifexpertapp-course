import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// custom hook
export const useFetchGifs = (category) => {
  const [loadingState, setloadingState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // fetch gifs from api
    getGifs(category)
      // passes the promise's return to upload the data
      .then((imgs) => {
        setloadingState({
          data: imgs,
          loading: false,
        });
      });
  }, [category]);

  return loadingState; //{data:[], loading: true}
};
