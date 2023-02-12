import { newWhiteLine } from "./lines.js";

const newPageTitle = (numIn, text, small) => {
    const pageTitle = document.createElement('div');
    pageTitle.className = 'pageTitle';

    const num = document.createElement('h1');
    num.className = 'pageTitle1';
    num.textContent = numIn;

    const title = document.createElement('h1');
    title.textContent = text;
    title.className = 'pageTitle2';

    if (small) title.className = 'smallPageTitle2';

    pageTitle.append(num, newWhiteLine(), title);

    return pageTitle;
};

export default newPageTitle;
