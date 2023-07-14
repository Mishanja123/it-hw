const API_KEY = 'live_O41bUliXwtZBySclTTlqmOHnsq8wONJGV9GuBCZn3LrrfretOhVSPq6w7QJnY2Dg';



function fetchBreeds() {
    return fetch(
        `https://api.thecatapi.com/v1/breeds?${API_KEY}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }


function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}
 
export { fetchBreeds, fetchCatByBreed }