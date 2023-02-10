import main from "../Main/Main.js";
import galleryContainer from "../Gallery/Gallery.js";
import studentContainer from "../Student/Student.js";
import entrantContainer from "../Entrant/Entrant.js";
import specialityContainer from "../Speciality/Speciality.js";
import teachersContainer from "../Teachers/Teachers.js";
import errorContainer from "../404/404.js";

const changePage = (event) => {
    let result;
    switch (event.target.text) {
        case 'Main':
            result = main;
            break;
        case 'Gallery':
            result = galleryContainer;
            break;
        case 'Student':
            result = studentContainer;
            break;
        case 'Entrant':
            result = entrantContainer;
            break;
        case 'Speciality':
            result = specialityContainer;
            break;
        case 'Teachers':
            result = teachersContainer;
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
}

export default changePage;
