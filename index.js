import header from "./Header/Header.js";
import main from "./Main/Main.js";
import footerContainer from "./Footer/Footer.js";
import changePage from "./utilities/changePAge.js";

const content = document.createElement('div');
content.id = 'content';
content.append(main);

const root = document.getElementById('root');
root.append(header);
root.append(content);
root.append(footerContainer);
