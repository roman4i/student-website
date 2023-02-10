import { newWhiteLine } from "../components/lines.js";
import studenArticles from "./articlesList.js";
import { newArticle } from "../components/articles.js";
import newPageTitle from "../components/pageTitle.js";
import newSpacer from "../components/spacer.js";

const studentContainer = document.createElement('div');

studentContainer.append(newPageTitle('02', 'STUDENT'));

studenArticles.forEach((val, ind) => {
    studentContainer.append(newWhiteLine(), newArticle(val, ind));
});

studentContainer.append(newWhiteLine());

studentContainer.append(newSpacer());

const detailsContainer = document.createElement('div');
detailsContainer.className = 'basic';

const detailsTitle = document.createElement('h1');
detailsTitle.textContent = 'РЕКВІЗИТИ ДЛЯ СПЛАТИ ЗА КОНТРАКТ';
detailsContainer.append(detailsTitle);

detailsContainer.innerHTML += `
    <h3>Реквізити для сплати за контракт</h3>
    <span>Код отримувача: 00 22 42 77</span>
    <br><br>
    <span>Р/Р отримувача: UA 05 82 01 72 03 13 27 100 120 118 4194</span>
    <br><br>
    <span>Банк отримувача: Державна казначейська служба України</span>
    <br><br>
    <span>Призначення платежу: Сплата за навчання</span>
    <br><br>
    <span>ПІБ студента, група, платник</span>
`;

studentContainer.append(detailsContainer);

export default studentContainer;
