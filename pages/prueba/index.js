import TitlePage from "../../components/commons/title_page/title_page";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import config from "../../utils/config";
import BackgroundLoader from "../../components/commons/background_loader/background_loader";
import {
  getPruebaService,
  addPruebaService,
  editPruebaService,
  deletePruebaService,
} from "../../utils/Prueba/services/Prueba_services";
import Modal from "../../components/commons/modal/modal";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const Prueba = () => {
  const url = `${config.api_url}/`;
  const [selectedData, setSelectedData] = useState();
  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(false);

  /* 
    let { data } = useSWR(url, () => {
        setIsLoading(true);
        return getPruebaService(user.user.token).then((result) => {
            setIsLoading(false)
            return result.result
        })
    }
    );
 */

  async function addPrueba(e, data) {
    e.preventDefault();
    setIsLoading(true);
    return await addPruebaService(user.user.token, data).then((result) => {
      setIsLoading(false);
      mutate(url);
      return result;
    });
  }

  async function editPrueba(e, data) {
    e.preventDefault();
    setIsLoading(true);
    return await editPruebaService(user.user.token, data).then((result) => {
      setIsLoading(false);
      mutate(url);
      return result;
    });
  }

  async function deletePrueba(e, data) {
    e.preventDefault();
    setIsLoading(true);
    return await deletePruebaService(user.user.token, data).then((result) => {
      setIsLoading(false);
      mutate(url);
      return result;
    });
  }

  return (
    <>
      {isLoading && <BackgroundLoader show={isLoading} />}
      <TitlePage title="Prueba" />

      <Modal
        title="Agregar Prueba"
        body={<AddIcon handleSubmitAction={addPrueba} />}
        button={
          <IconButton>
            <AddIcon />
          </IconButton>
        }
      />

      <Modal
        title="Editar Prueba"
        body={<EditIcon handleSubmitAction={editPrueba} />}
        button={
          <IconButton onClick={() => setSelectedData()}>
            <EditIcon />
          </IconButton>
        }
      />

      <Modal
        title="¿Seguro que deseas eliminar?"
        body={<Delete handleSubmitAction={deletePrueba} />}
        button={
          <IconButton onClick={() => setSelectedData()}>
            <Delete />
          </IconButton>
        }
      />
    </>
  );
};

export default Prueba;
