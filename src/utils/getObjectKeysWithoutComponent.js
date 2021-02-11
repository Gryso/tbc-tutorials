function getObjectKeysWithoutComponent(object) {
  return Object.keys(object).filter((key) => key !== "component");
}

export default getObjectKeysWithoutComponent;
