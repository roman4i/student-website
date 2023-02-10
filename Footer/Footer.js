import { newGrayLine, newWhiteLine } from "../components/lines.js";

const footerContainer = document.createElement('footer');

footerContainer.append(newWhiteLine());

const follow = document.createElement('div');
follow.className = 'basic followCont';

const followText = document.createElement('p');
followText.className = 'followText';
followText.textContent = 'FOLLOW US';
follow.append(followText);

const followIconsContainer = document.createElement('div');

const createIcon = (iconPath, link) => {
    const result = document.createElement('a');
    result.href = link;

    const icon = document.createElement('img');
    icon.src = iconPath;

    result.append(icon);

    return result;
};

followIconsContainer.append(createIcon('/assets/icons/social/facebook.svg', 'https://facebook.com'));
followIconsContainer.append(createIcon('/assets/icons/social/twitter.svg', 'https://twitter.com'));
followIconsContainer.append(createIcon('/assets/icons/social/in.svg', 'https://linkedin.com'));
followIconsContainer.append(createIcon('/assets/icons/social/mail.svg', 'https://google.com'));

follow.append(followIconsContainer);

footerContainer.append(follow);

footerContainer.append(newGrayLine());

const navLinks = document.createElement('div');
navLinks.className = 'navLinksFooter';

const newFooterLink = (linkName, link) => {
    const result = document.createElement('a');
    result.href = link;
    result.text = linkName;

    return result;
}

navLinks.append(newFooterLink('Головна', '/main'));
navLinks.append(newFooterLink('Галерея', '/gallery'));
navLinks.append(newFooterLink('Про коледж', '/about'));
navLinks.append(newFooterLink('Студенту', '/student'));
navLinks.append(newFooterLink('Абітурієнту', '/abiturient'));
navLinks.append(newFooterLink('Спеціальності', '/specials'));
navLinks.append(newFooterLink('Контакти', '/contacts'));

footerContainer.append(navLinks);

export default footerContainer;
