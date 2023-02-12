import { newWhiteLine } from "../components/lines.js";
import studenArticles from "./articlesList.js";
import { newArticle } from "../components/articles.js";
import newPageTitle from "../components/pageTitle.js";
import newSpacer from "../components/spacer.js";

const studentContainer = document.createElement('div');

studentContainer.append(newPageTitle('02', 'СТУДЕНТУ'));

studenArticles.forEach((val, ind) => {
    const content = document.createElement('div');

    content.innerHTML += val.text;

    studentContainer.append(newWhiteLine(), newArticle(val, ind, content));
});

studentContainer.append(newWhiteLine());

studentContainer.append(newSpacer());

export default studentContainer;
