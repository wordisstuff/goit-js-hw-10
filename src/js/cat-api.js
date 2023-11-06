
import { fetchCatByBreed } from "./fetchCatByBreed";
import { fetchBreeds, dataInfo } from "./fetchBreeds";
import { showBreedLoader, showCatLoader, hideCatLoader, showError } from "./showHideFunction"


export let select = document.querySelector('.breed-select');
export const catInfo = document.querySelector('.cat-info');


fetchBreeds(select, markInput).then(() => {
    showBreedLoader();
})
    .catch(() => showError());

const InfoObject = {
    description: "немає інфи", name: "немає інфи", temperament: "немає інфи", cfa_url: "", reference_image_id: ""
};

select.addEventListener('change', onClick)
function onClick(evnt) {
    evnt.preventDefault();
    let InfoId = [...dataInfo];
    const value = evnt.currentTarget.value;
    InfoId.map(o => {
        if (o.id === value) {
            InfoObject.description = o.description;
            InfoObject.name = o.name;
            InfoObject.temperament = o.temperament;
            InfoObject.cfa_url = o.cfa_url
        };
    });
    fetchCatByBreed(value, catInfo, markInfo, showError);
    if (value) {
        showCatLoader();
    };
};

function markInput(arr) {
    const gag = [{ name: "вибери породу" }, ...arr];
    return gag.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
};

function markInfo(arr) {
    hideCatLoader()
    return arr.map(({ url, }) =>
        `<img src="${url}" alt="" width="400">
        <h2>${InfoObject.name}</h2>
<p>${InfoObject.description}</p >
<h4>Temperament:</h4>
<p>${InfoObject.temperament}</p>
        `
    ).join('');
};