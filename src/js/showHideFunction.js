import { select, catInfo } from "./cat-api";

const error = document.querySelector('.error');
const loader = document.querySelector('.loader');

export function showBreedLoader() {
    select.classList.add('visible');
    loader.classList.add('hidden');
}

export function showCatLoader() {
    catInfo.classList.add('hidden');
    loader.classList.remove('hidden');
}

export function hideCatLoader() {
    loader.classList.add('hidden');
    catInfo.classList.remove('hidden');
}

export function showError() {
    select.classList.add('hidden');
    loader.classList.add('hidden');
    error.classList.add('showError');
}