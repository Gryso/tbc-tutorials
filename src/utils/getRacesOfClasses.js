import getObjectKeysWithoutComponent from "./getObjectKeysWithoutComponent";
import * as raceStats from "./raceStats";

function getRacesOfClasses(classes) {
  return classes.reduce((classRaces, wowClass) => ({
    ...classRaces,
    [wowClass]: getObjectKeysWithoutComponent(raceStats[wowClass])
  }), {});
}

export default getRacesOfClasses;
