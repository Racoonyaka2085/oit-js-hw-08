// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const refs = {
    gallery: document.querySelector(".gallery"),
    image: document.createElement("img"),
    href: document.querySelector('a'),
    lightbox: document.querySelector(".lightbox"),
};

const createGalleryItem = ({ preview, original, description }) =>

    `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
  </a>`;
const galleryMarkup = galleryItems.reduce(
    (acc, item) => acc + createGalleryItem(item),
    ""
);
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    animationSpeed: 250,
    navText: ['&#8249;', '&#8250;']

});
gallery.on('show.simplelightbox', function() {});