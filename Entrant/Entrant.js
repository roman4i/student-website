import newPageTitle from "../components/pageTitle.js";
import entrantArticles from "./entrantArticles.js";
import { newArticle } from "../components/articles.js";
import { newWhiteLine } from "../components/lines.js";
import newSpacer from "../components/spacer.js";

const entrantContainer = document.createElement('div');

entrantContainer.append(newPageTitle('03', 'ENTRANT')); 

entrantArticles.forEach((val,ind) => {
    entrantContainer.append(newWhiteLine() ,newArticle(val, ind));
});
entrantContainer.append(newWhiteLine());

entrantContainer.append(newSpacer());

const documentsList = document.createElement('div');
documentsList.className = 'basic';

const listTitle = document.createElement('h1');
listTitle.textContent = 'ПЕРЕЛІК ДОКУМЕНТІВ ДЛЯ ВСТУПУ';

const listBody = document.createElement('div');
listBody.innerHTML = `
<p>
    Додатковий прийом документів на денну форму навчання для вступників на основі базової середньої освіти (БЗСО) (після 9 класу) з 01 серпня 2022 року по 12 серпня 2022 року через електронний кабінет вступника.
</p>
<p>
    Прийом електронних заяв та мотиваційних листів на денну форму навчання для вступників на основі повної загальної середньої освіти (ПЗСО) (після 11 класу) з 14 липня 2022 року по 31 серпня 2022 року.
</p>
<p>
    Увага! Вcтупники, що вступають за свідоцтвом про здобуття повної загальної середньої освіти (ПЗСО) (11 кл.) та мотиваційними листами мають вчасно зареєструвати <a href="https://cabinet.osvitavsim.org.ua/login/register">електронний кабінет</a> та подати електронні заяви. Приймальна комісія надає консультації для такої категорії вступників.
</p>
<p>
    Для зарахування в установлений термін вступники подають такі документи у спосіб визначеній правилами прийому:
</p>
<ul>
    <li>
        Свідоцтво про базову середню освіту ( 9 кл.) або свідоцтво про повну загальну середню освіту (11 кл.) (копії та оригінали) (реєстрація кабінету для вступу на основі базової середньої освіти здійснюється за серією та номером цього документуy
    </li>
    <li>
        Додаток до свідоцтва про базову середню освіту ( 9 кл.) або свідоцтво про повну загальну середню освіту (11 кл.) (копії та оригіналиy
    </li>
    <li>
        Копія паспорта вступника з витягом (3 екземпляри)(за свідоцтвом про народження вступити можуть лише ті, кому виповнилося 14 років після 1 січня 2021 рокуy
    </li>
    <li>
        Копія ідентифікаційного коду (3 екземпляриy
    </li>
    <li>
        Копія пасторта батьків (1 екземпляриy
    </li>
    <li>
        8 фото 3 на 4
    </li>
    <li>
        Приписне свідоцтво (хлопцям, яким виповнилося 17 років) (2 екземпляриy
    </li>
    <li>
        Мед.довідка Ф 086-1/О, з картою щеплень(з відміткою про проходження флюорографії в 2021 році)( оригіналиy
    </li>
    <li>
        Мотиваційний лист (Всі категорії вступників)
    </li>
</ul>
<p>
    Для вступу на другий курс коледжу на основі свідоцтва про повну загальну середню освіту (11 кл.) необхідно також надати мотиваційний лист.
</p>
`;

documentsList.append(listTitle, listBody);

entrantContainer.append(documentsList);
entrantContainer.append(newWhiteLine());

export default entrantContainer;
