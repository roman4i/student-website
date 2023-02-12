import newPageTitle from "../components/pageTitle.js";
import { teachersList1, teachersList2, teachersList3 } from "./teachersList.js";

const teachersContainer = document.createElement('div');

teachersContainer.append(newPageTitle('06', 'ВИКЛАДАЧІ'));

const newTeachersAlbum = (data) => {
    const album = document.createElement('div');
    album.className = 'album';

    data.forEach(val => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacherCard';

        const teacherPhoto = document.createElement('img');
        teacherPhoto.className = 'teacherImg';
        teacherPhoto.src = '/assets/images/teachers/' + val.src;
        teacherPhoto.alt = val.alt;

        const teacherData = document.createElement('div');
        teacherData.className = 'teachersData';

        const teacherName = document.createElement('h3');
        teacherName.className = 'teachersDataName';
        teacherName.textContent = val.name;

        const teacherDescription = document.createElement('span');
        teacherDescription.className = 'teachersDataDescr';
        teacherDescription.textContent = val.description;

        teacherData.append(teacherName, teacherDescription);

        teacherCard.append(teacherPhoto, teacherData);

        album.append(teacherCard);
    });

    return album;
}

teachersContainer.append(newTeachersAlbum(teachersList1));
teachersContainer.append(newTeachersAlbum(teachersList2));
teachersContainer.append(newTeachersAlbum(teachersList3));

export default teachersContainer;
