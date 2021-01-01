import { getPruebaCrud, addPruebaCrud,editPruebaCrud, deletePruebaCrud } from "../cruds/Prueba_cruds";
import Alert from "react-s-alert";


export async function getPruebaService(token) {
    return await getPruebaCrud(token).then((result) => {
        if (result.success) {

        } else {
            result.result.forEach((element) => {
                Alert.error(element.message, {
                    position: "bottom",
                    effect: "stackslide",
                });
            });
        }
        return result;
    })
}

export async function addPruebaService(data, token) {
    return await addPruebaCrud(data, token).then((result) => {
        if (result.success) {
            Alert.success("Prueba creado correctamente", {
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
    })
}

export async function editPruebaService(data, token) {
    return await editPruebaCrud(data, token).then((result) => {
        if (result.success) {
            Alert.success("Prueba editado correctamente", {
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
    })
}


export async function deletePruebaService(token,data){
  return await deletePruebaCrud(token,data).then((result)=>{
      if (result.success) {
        Alert.success("Materia eliminada correctamente", {
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
  })
}
