
export let dataInfo = [];
export function fetchBreeds(domCatInput, funkMarkInput) {
    return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
        .then((data) => {
            dataInfo = data.map(e => e);
            return domCatInput.innerHTML = funkMarkInput(data);
        });
};
