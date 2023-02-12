import newPageTitle from "../components/pageTitle.js";
import floorsData from "./floorsData.js";
import floors from "./floors.js";

const mapContainer = document.createElement('div')

mapContainer.append(newPageTitle('05', 'КАРТА'));

const floorsContainer = document.createElement('div');
floorsContainer.className =  'floors basic';

const map = document.createElement('div');
map.className = 'map';
map.id = 'map';

const selectFloor = (data) => {
    map.innerHTML = data;
};

const newFloor = (data, num) => {
    const floor = document.createElement('a');
    floor.textContent = data.name;

    floor.onclick = () => {
        selectFloor(floors[num]);
    }

    return floor;
};

floorsData.forEach((val, num) => {
    floorsContainer.append(newFloor(val,  num));
});

mapContainer.append(floorsContainer);

mapContainer.append(map);

selectFloor(floors[0]);

export default mapContainer;
