export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("userState");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem("userState", serializedData);
  } catch (error) {}
};
