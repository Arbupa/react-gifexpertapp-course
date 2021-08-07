export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=bokmAMfWv2KcOJV4eJcL5GIkSPCaG3MW&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
  // regresa una promesa que resuelve la colección de imágenes.
  return gifs;
};
