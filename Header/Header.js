import changePage from "../utilities/changePage.js";

const header = document.createElement('header');
header.className = 'basic';
header.id = 'header';

const navigaton = document.createElement('nav');
navigaton.className = 'navigation';

const navBar  = document.createElement('ul');
navBar.className = 'navbar';

const newItem = (itemName) => {
    const linkContainer = document.createElement('li');

    const link = document.createElement('a');
    link.text = itemName;
    link.className = 'navLink';
    link.onclick = event  => {
        changePage(event);
        // check if window less then 1400px
        if (window.innerWidth < '1400') navBar.style.display = 'none';;
    };

    linkContainer.append(link);

    return  linkContainer;
}

navBar.append(
    newItem('Головна'),
    newItem('Галерея'),
    newItem('Студенту'),
    newItem('Абітурієнту'),
    newItem('Спеціальності'),
    newItem('Контакти'),
);

navBar.hidden = true;

const hamburger = document.createElement('img');
hamburger.src = '/assets/icons/hamburger.svg'
hamburger.className = 'hamburger';
hamburger.onclick =  () => {
    navBar.style.display === 'block' ? navBar.style.display = 'none' : navBar.style.display = 'block';
}

header.append(hamburger);
header.append(navBar);

export default header;
