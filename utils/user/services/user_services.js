import {
  addUserCrud,
  editUserCrud,
  deleteUserCrud,
  getUsersCrud,
} from "../crud/user_cruds";
import Alert from "react-s-alert";

export async function getUserService(token) {
  return await getUsersCrud(token).then((result) => {
    if (result.success) {
      Alert.success("Usuarios encontrados correctamente", {
        position: "bottom",
        effect: "stackslide",
      });
    } else {
      result.result.forEach((element) => {
        Alert.error(element.message, {
          position: "bottom",
          effect: "stackslide",
        });
      });
    }
    return result;
  });
}

export async function addUserService(token, data) {
  return await addUserCrud(token, data).then((result) => {
    if (result.success) {
      Alert.success("Usuario agergado correctamente", {
        position: "bottom",
        effect: "stackslide",
      });
    } else {
      result.result.forEach((element) => {
        Alert.error(element.message, {
          position: "bottom",
          effect: "stackslide",
        });
      });
    }
    return result;
  });
}

export async function editUserService(token, data) {
  return await editUserCrud(token, data).then((result) => {
    if (result.success) {
      Alert.success("Usuarios editado correctamente", {
        position: "bottom",
        effect: "stackslide",
      });
    } else {
      result.result.forEach((element) => {
        Alert.error(element.message, {
          position: "bottom",
          effect: "stackslide",
        });
      });
    }
    return result;
  });
}

export async function deleteUserService(token, data) {
  return await deleteUserCrud(token, data).then((result) => {
    if (result.success) {
      Alert.success("Usuario agergado correctamente", {
        position: "bottom",
        effect: "stackslide",
      });
    } else {
      result.result.forEach((element) => {
        Alert.error(element.message, {
          position: "bottom",
          effect: "stackslide",
        });
      });
    }
    return result;
  });
}
