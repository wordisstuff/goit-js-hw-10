
import { fetchCatByBreed } from "./fetchCatByBreed";
import { fetchBreeds, dataInfo } from "./fetchBreeds";

let select = document.querySelector('.breed-select');
export const catInfo = document.querySelector('.cat-info');

hideLoader();
fetchBreeds(select, markInput);

const InfoObject = {
    description: "немає інфи", name: "немає інфи", temperament: "немає інфи", cfa_url: "", reference_image_id: ""
};

select.addEventListener('change', onClick);
function onClick(evnt) {
    evnt.preventDefault();
    let InfoId = [...dataInfo];
    const value = evnt.currentTarget.value;
    console.log(evnt.currentTarget.name);
    InfoId.map(o => {
        if (o.id === value) {
            console.log(o.id);
            InfoObject.description = o.description;
            InfoObject.name = o.name;
            InfoObject.temperament = o.temperament;
            InfoObject.cfa_url = o.cfa_url
        };
    });
    return fetchCatByBreed(InfoObject.reference_image_id, catInfo, markInfo);
};

function markInput(arr) {
    const gag = [{ name: "вибери породу" }, ...arr];
    return gag.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`
    ).join('');
};



function markInfo(arr) {
    console.log(arr);
    return arr.map(({ url, }) =>
        `<img src="${url}" alt="" width="400">
        <h2>${InfoObject.name}</h2>
<p>${InfoObject.description}</p >
<h4>Temperament:</h4>
<p>${InfoObject.temperament}</p>
        `
    ).join('');
};


function hideLoader() {
    document.querySelector('.loader').classList.add('visible');
};

function showLoader() {
    document.querySelector('.loader').classList.remove('visible');
};
