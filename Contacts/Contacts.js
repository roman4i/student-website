import { newWhiteLine } from "../components/lines.js";
import newPageTitle from "../components/pageTitle.js";

const contactsContainer = document.createElement('div');
contactsContainer.append(newPageTitle('08', 'КОНТАКТИ'));

const address = document.createElement('div');
address.className = 'contactsSide';

const addressCapt = document.createElement('h3');
addressCapt.className = 'addressCaption';
addressCapt.textContent = 'НАША АДРЕСА';

const addressText = document.createElement('span');
addressText.className = 'addressText';
addressText.innerText = 'ВСП “ХКТФК НТУ “ХПІ” \n вул. Манізера 4 (ст. Метро Архітектора Бекетова) \n Харків 61002 Україна';

address.append(addressCapt, addressText);

const newShortLine = () => {
    const line = newWhiteLine();
    line.className += ' shortLine';

    return line;
};

address.append(newShortLine());

const mails = `
    <div class='mailText'>
    <p>Для загальних питань: e-mail: info@ct-college.net</p>
    <br>
    <p>Для питань пов’язаних зі вступом: e-mail: khctpc.info.vstup2022@gmail.com</p>
    </div>
`;

address.innerHTML += mails;

address.append(newShortLine());

const mapLink = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.9616834537426!2d36.24161650228719!3d49.99894495507759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e8590f6d19%3A0x6d16d00057c52ebc!2z0YPQuy4g0JzQsNC90LjQt9C10YDQsCwgNCwg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1sru!2sua!4v1676148286761!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const googleMaps = document.createElement('div');
googleMaps.innerHTML = mapLink;

contactsContainer.append(address);
contactsContainer.append(googleMaps);

const contactsTg = document.createElement('div');
contactsTg.className = 'contactsSide';
contactsTg.style.display = 'block'

const contactsTgTitle = document.createElement('h3');
contactsTgTitle.textContent = 'КОНТАКТИ';
contactsTgTitle.className = 'addressCaption';

const contactsTgText = document.createElement('span');
contactsTgText.className =  'addressText';
contactsTgText.textContent = 'Під час воєнного стану зворотній звʼязок через телеграм групу';

const qrCode =  document.createElement('img');
qrCode.className = 'qrCode';
qrCode.src = '/assets/images/qr-code.svg'

contactsTg.append(contactsTgTitle, contactsTgText, qrCode);

contactsContainer.append(contactsTg);


export default contactsContainer;
