import { newWhiteLine } from "../components/lines.js";
import { list1, list2, list3, list4 } from "./photos.js";
import newPageTitle from "../components/pageTitle.js";

const galleryContainer = document.createElement('div');

galleryContainer.append(newPageTitle('01', 'ГАЛЕРЕЯ'));

const createAlbum  = (photos) => {
    const albumLine = document.createElement('div');
    albumLine.className = 'album';
    photos.forEach(val => {
        const photo = document.createElement('img');
        photo.className = 'albumImage';
        photo.src = '/assets/images/gallery/' + val.src;
        photo.alt = val.alt;
        albumLine.append(photo);
    });

    return albumLine
};

galleryContainer.append(createAlbum(list1), createAlbum(list2), createAlbum(list3), createAlbum(list4));

export default galleryContainer;
