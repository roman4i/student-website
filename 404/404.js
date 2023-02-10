const errorContainer = document.createElement('div');
errorContainer.className = 'errorContainer basic';

const errorImg = document.createElement('img');
errorImg.className = 'errorImage';
errorImg.src = '/assets/error/404.svg'

errorContainer.append(errorImg)

export default errorContainer; 
