import main from "../Main/Main.js";
import galleryContainer from "../Gallery/Gallery.js";
import studentContainer from "../Student/Student.js";
import entrantContainer from "../Entrant/Entrant.js";
import specialityContainer from "../Speciality/Speciality.js";
import teachersContainer from "../Teachers/Teachers.js";
import errorContainer from "../404/404.js";
import mapContainer from "../Map/Map.js";
import contactsContainer from "../Contacts/Contacts.js";
import managementContainer from "../Management/Management.js"
import aboutContainer from "../About/About.js";

const changePage = (event) => {
    let result;
    switch (event.target.text) {
        case 'Головна':
            result = main;
            break;
        case 'Галерея':
            result = galleryContainer;
            break;
        case 'Студенту':
            result = studentContainer;
            break;
        case 'Абітурієнту':
            result = entrantContainer;
            break;
        case 'Спеціальності':
            result = specialityContainer;
            break;
        case 'Teachers':
            result = teachersContainer;
            break;
        case 'Map': 
            result = mapContainer;
            break;
        case 'Контакти':
            result = contactsContainer;
            break;
        case 'Керівництво':
            result = managementContainer;
            break;
        case 'ДІЗНАТИСЯ БІЛЬШЕ':
            result = aboutContainer;
            break;
    
        default:
            result = errorContainer;
            break;
    }

    document.getElementById('content').remove();

    const content = document.createElement('div');
    content.id = 'content';
    content.append(result);

    document.getElementById('header').after(content);
    window.scrollTo(0,0);
}

export default changePage;
