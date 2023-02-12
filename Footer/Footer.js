import { newGrayLine, newWhiteLine } from "../components/lines.js";
import changePage from '../utilities/changePage.js';

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
    result.className = 'socialsLink';
    result.href = link;

    const icon = document.createElement('img');
    icon.src = iconPath;

    result.append(icon);

    return result;
};

followIconsContainer.append(createIcon('/assets/icons/social/facebook.svg', 'https://facebook.com'));
followIconsContainer.append(createIcon('/assets/icons/social/twitter.svg', 'https://twitter.com'));
followIconsContainer.append(createIcon('/assets/icons/social/in.svg', 'https://linkedin.com'));
followIconsContainer.append(createIcon('/assets/icons/social/mail.svg', '#'));

follow.append(followIconsContainer);

footerContainer.append(follow);

footerContainer.append(newGrayLine());

const navLinks = document.createElement('div');
navLinks.className = 'navLinksFooter';

const newFooterLink = (linkName) => {
    const result = document.createElement('a');
    result.text = linkName;

    result.onclick = event => {
        changePage(event);
    }

    return result;
}

navLinks.append(newFooterLink('Головна'));
navLinks.append(newFooterLink('Галерея'));
navLinks.append(newFooterLink('Керівництво'));
navLinks.append(newFooterLink('Студенту'));
navLinks.append(newFooterLink('Абітурієнту'));
navLinks.append(newFooterLink('Спеціальності'));
navLinks.append(newFooterLink('Контакти'));

footerContainer.append(navLinks, newWhiteLine());

export default footerContainer;
