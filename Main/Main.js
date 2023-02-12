import picturesList from "./companiesPicture.js";
import { newWhiteLine } from "../components/lines.js";
import articles from "./articles.js";
import changePage from "../utilities/changePAge.js";

const main = document.createElement('div');
main.className = 'main';

const mainCaptionCont = document.createElement('div');
mainCaptionCont.className = 'basic mainCapt';

const mainCaptionPt1 = document.createElement('h1');
mainCaptionPt1.textContent = 'IT';
mainCaptionPt1.className = 'mainCaption1';

const mainCaptionPt2 = document.createElement('h1');
mainCaptionPt2.textContent = 'COLLEGE.';
mainCaptionPt2.className = 'mainCaption2';

const mainCaptionPt3 = document.createElement('h1');
mainCaptionPt3.textContent = 'COM.UA';
mainCaptionPt3.className = 'mainCaption3';

mainCaptionCont.append(mainCaptionPt1);
mainCaptionCont.append(mainCaptionPt2);
mainCaptionCont.append(mainCaptionPt3);
main.append(mainCaptionCont);

const collegeName = document.createElement('div');
collegeName.className = 'collegeName basic';
collegeName.textContent = 'ВІДОКРЕМЛЕНИЙ СТРУКТУРНИЙ ПІДРОЗДІЛ “ХАРКІВСЬКИЙ КОМП’ЮТЕРНО-ТЕХНОЛОГІЧНИЙ ФАХОВИЙ КОЛЕДЖ НТУ “ХПІ””';
main.append(collegeName);

const spacer = document.createElement('div');
spacer.className = 'mainPageSpacer';

main.append(spacer);

const aboutCollege = document.createElement('div');
aboutCollege.className = 'basic aboutCollBlock';

const aboutTitle = document.createElement('h2');
aboutTitle.className = 'aboutCollegeTitle';
aboutTitle.textContent = 'ПРО КОЛЕДЖ';

const  aboutText = document.createElement('p');
aboutText.className = 'aboutCollegeMain';
aboutText.textContent = `Історія харківського комп’ютерно-технологічного коледжу Національного технічного університету 
”ХПІ” розпочалася у далекому 1947 році. З 1997 року навчальний заклад входить до складу НТУ “ХПІ”. За довгі роки існування 
профілі коледжу неодноразово змінювалися. Сьогодні у нас ведеться підготовка кваліфікованих фахівців в галузі розробки 
програмного забезпечення, обслуговування програмних систем і комплексів, машинобудування, ремонту побутової техніки.`;

const aboutMore = document.createElement('a');
aboutMore.className = 'mainAboutBtn';
aboutMore.text = 'ДІЗНАТИСЯ БІЛЬШЕ';
aboutMore.onclick = changePage;

aboutCollege.append(aboutTitle, aboutText, aboutMore);

main.append(aboutCollege, newWhiteLine());

const companiesPictures = document.createElement('div');
companiesPictures.className = 'companiesPictures';

picturesList.forEach(val => {
    const pict = document.createElement('img');
    pict.alt = val.alt;
    pict.src = '/assets/icons/companies/' + val.src;

    companiesPictures.append(pict);
});

main.append(companiesPictures);

const actualNewsHead = document.createElement('div');
actualNewsHead.className = 'basic newsTitleContainer';

const newsHeadWhite = document.createElement('h1');
newsHeadWhite.textContent = 'АКТУАЛЬНІ';
newsHeadWhite.className = 'newsHeadWhite';
actualNewsHead.append(newsHeadWhite);

const newsHeadGray = document.createElement('h1');
newsHeadGray.textContent = 'НОВИНИ';
newsHeadGray.className = 'newsHeadGray';
actualNewsHead.append(newsHeadGray);

main.append(actualNewsHead);

const newArticle = (articleObj) => {
    const articleLine = document.createElement('div');
    articleLine.className = 'basic articleLine justify';

    const number = document.createElement('div');
    number.textContent = articleObj.number;

    const title = document.createElement('div');
    title.textContent = articleObj.title;
    title.className = 'datedArticleTitle';

    const date = document.createElement('div');
    date.textContent = articleObj.date;

    articleLine.append(number, title, date);

    return articleLine;
};

main.append(newWhiteLine());

const articlesContainer = document.createElement('div');
articlesContainer.className = 'articlesContainer';

const articlesBody = document.createElement('div');
articlesBody.className = 'articlesBody';

articles.forEach(val => {
    articlesBody.append(newArticle(val), newWhiteLine());
});

const leftSpacer = document.createElement('div');
leftSpacer.className = 'leftSpacer';;

articlesContainer.append(leftSpacer, articlesBody);

main.append(articlesContainer);

export default main;
