import { newWhiteLine } from "./lines.js";

const newPageTitle = (numIn, text) => {
    const pageTitle = document.createElement('div');

    const num = document.createElement('h1');
    num.className = 'pageTitle1';
    num.textContent = numIn;

    const title = document.createElement('h1');
    title.textContent = text;
    title.className = 'pageTitle2';

    pageTitle.append(num, newWhiteLine(), title);

    return pageTitle;
};

export default newPageTitle;
