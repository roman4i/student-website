import newPageTitle from "../components/pageTitle.js";
import entrantArticles from "./entrantArticles.js";
import { newArticle } from "../components/articles.js";
import { newWhiteLine } from "../components/lines.js";
import newSpacer from "../components/spacer.js";

const entrantContainer = document.createElement('div');

entrantContainer.append(newPageTitle('03', 'АБІТУРІЄНТУ')); 

entrantArticles.forEach((val,ind) => {
    const content = document.createElement('div');

    content.innerHTML += val.text;

    entrantContainer.append(newWhiteLine() ,newArticle(val, '0' + (ind + 1), content));
});
entrantContainer.append(newWhiteLine());

entrantContainer.append(newSpacer());

entrantContainer.append(newWhiteLine());

export default entrantContainer;
