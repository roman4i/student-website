import { newArticle } from "../components/articles.js";
import { newWhiteLine } from "../components/lines.js";
import newPageTitle from "../components/pageTitle.js";
import specialityArticles from "./specialityArticles.js";

const specialityContainer = document.createElement('div');

specialityContainer.append(newPageTitle('04', 'ENTRANT'));

specialityArticles.forEach(val => {
    specialityContainer.append(newWhiteLine() ,newArticle(val, val.number));
});
specialityContainer.append(newWhiteLine());

export default specialityContainer;
