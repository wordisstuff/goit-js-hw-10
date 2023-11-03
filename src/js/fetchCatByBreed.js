
export function fetchCatByBreed(breedId, domCatInfo, markFunkInfo) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
        .then((data) => {
            return domCatInfo.innerHTML = markFunkInfo(data)
        })
        .catch((err) => console.log(err));
};