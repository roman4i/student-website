import changePage from "../utilities/changePage.js";

const header = document.createElement('header');
header.className = 'basic';
header.id = 'header';

const navigaton = document.createElement('nav');
navigaton.className = 'navigation';

const navBar  = document.createElement('ul');

const newItem = (itemName) => {
    const link = document.createElement('a');
    link.href = '#';
    link.append(document.createElement('li').textContent = itemName);
    link.onclick = changePage;

    return  link;
}

navBar.append(
    newItem('Main'),
    newItem('Gallery'),
    newItem('Student'),
    newItem('Entrant'),
    newItem('Contacts'),
    newItem('Speciality'),
    newItem('Teachers'),
);

navBar.hidden = true;

const hamburger = document.createElement('img');
hamburger.src = '/assets/icons/hamburger.svg'
hamburger.className = 'hamburger';
hamburger.onclick =  () => {
    navBar.hidden === true ? navBar.hidden = false : navBar.hidden = true;
}

header.append(hamburger);
header.append(navBar);

export default header;
