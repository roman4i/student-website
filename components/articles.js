import { newWhiteLine } from "./lines.js";

const newArticle = (data, num, content) => {
    const articleBlock = document.createElement('div');

    const line = document.createElement('div');
    line.className = 'basic articleLine';
    
    const numText = document.createElement('span');
    numText.className = 'articleNum';
    numText.textContent = num;

    const articleTitle = document.createElement('span');
    articleTitle.textContent = data.title;

    
    articleBlock.append(line);
    
    const articleData = document.createElement('div');
    articleData.className = 'articleData';
    articleData.append(newWhiteLine());
    articleData.append(content);

    line.onclick = () => {
        if (articleData.style.maxHeight) {
            articleData.style.maxHeight = null;
        } else {
            articleData.style.maxHeight = articleData.scrollHeight + 'px';
        }
    }
    
    line.append(numText, articleTitle);
    articleBlock.append(articleData);

    return articleBlock;
};

export { newArticle };
