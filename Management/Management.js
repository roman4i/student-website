import newPageTitle from "../components/pageTitle.js";
import managementList from "./managementList.js";

const managementContainer = document.createElement('div');

managementContainer.append(newPageTitle('07', 'КЕРІВНИЦТВО', true));

const newManagementCard = (data) => {
    const cardBody = document.createElement('div');
    cardBody.className = 'managementCardBody';

    const aboutPersonBody = document.createElement('div');
    aboutPersonBody.className = 'managementText';

    const aboutPerson = document.createElement('p');
    aboutPerson.className = 'aboutManager'
    aboutPerson.innerHTML = data.about;

    const personPosition = document.createElement('p');
    personPosition.className = 'upper managerPosition'
    personPosition.textContent = data.position;

    const personName = document.createElement('div');
    personName.className = 'upper manager';
    
    const namePart = document.createElement('p');
    namePart.textContent = data.name.firstname;

    const surnamePart = document.createElement('p');
    surnamePart.className = 'managerName';
    surnamePart.textContent = data.name.surname;

    personName.append(surnamePart, namePart);

    aboutPersonBody.append(aboutPerson, personPosition, personName);

    const photo = document.createElement('img');
    photo.className = 'managerPhoto';
    photo.src = '/assets/images/management/' + data.photo;

    cardBody.append(photo, aboutPersonBody)

    return cardBody;
};

managementList.forEach(val => {
    managementContainer.append(newManagementCard(val));
});

export  default managementContainer;
