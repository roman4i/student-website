const newArticle = (data, num) => {
    const line = document.createElement('div');
    line.className = 'basic articleLine';
    
    const numText = document.createElement('span');
    numText.textContent = num;

    const articleTitle = document.createElement('span');
    articleTitle.textContent = data.title;

    line.append(numText, articleTitle);

    return line;
};

export { newArticle };
