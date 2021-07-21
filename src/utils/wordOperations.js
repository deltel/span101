export const capitalizeWord = (label) => {
  const capitalLetter = label.charAt(0).toUpperCase();
  return capitalLetter + label.slice(1);
};

export const transformLabel = (label) => {
  if (label === "part_of_speech") {
    const tempValue = label.split("_");
    tempValue[0] = capitalizeWord(tempValue[0]);
    tempValue[2] = capitalizeWord(tempValue[2]);
    return tempValue.join(" ");
  }

  if (["created_at", "updated_at"].includes(label)) {
    const tempValue = label.split("_");
    tempValue[0] = capitalizeWord(tempValue[0]);
    tempValue[1] = capitalizeWord(tempValue[1]);
    return tempValue.join(" ");
  }

  return capitalizeWord(label);
};

export const separateWordGroup = (obj) => {
  const newObj = { ...obj };
  delete newObj["Created At"];
  delete newObj["Updated At"];
  delete newObj.Id;
  delete newObj.Value;

  return newObj;
};

export const separateDateGroup = (obj) => {
  const newObj = { ...obj };
  delete newObj["Part of Speech"];
  delete newObj.Translation;
  delete newObj.Category;
  delete newObj.Keyword;
  delete newObj.Example;
  delete newObj.Id;
  delete newObj.Value;

  newObj["Created At"] = new Date(obj["Created At"]).toString().slice(0, 15);
  newObj["Updated At"] = new Date(obj["Updated At"]).toString().slice(0, 15);

  return newObj;
};
