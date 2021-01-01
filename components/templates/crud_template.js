/**
 *    Generic template to copy/paste pages cruds
 *    This page calls the correspondent method in service to make the call to the API.
 *    Please folow the methods naming convention.
 */
import TitlePage from "../commons/title_page/title_page";
import { Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import config from "../../utils/config";
import Modal from "../commons/modal/modal";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BackgroundLoader from "../commons/background_loader/background_loader";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  addUserService,
  deleteUserService,
  editUserService,
  getUserService,
} from "../../utils/user/services/user_services";

const CrudTemplate = (props) => {
  const url = `${config.api_url}/carrera/list`;
  const [selectedData, setSelectedData] = useState();
  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetUsers(e) {
    e.preventDefault();
    setIsLoading(true);
    return await getUserService(user.user.token).then((result) => {
      setIsLoading(false);
      mutate(url);
    });
  }

  async function handleAddUser(e, data) {
    e.preventDefault();
    setIsLoading(true);
    return await addUserService(user.user.token, data).then((result) => {
      setIsLoading(false);
      mutate(url);
    });
  }

  async function handleEditUser(e) {
    e.preventDefault();
    setIsLoading(true);
    return await editUserService(user.user.token, selectedData).then(
      (result) => {
        setIsLoading(false);
        mutate(url);
      }
    );
  }

  async function handleDeleteUser(e) {
    e.preventDefault();
    setIsLoading(true);
    return await deleteUserService(user.user.token, selectedData).then(
      (result) => {
        setIsLoading(false);
        mutate(url);
      }
    );
  }

  return <button onClick={(e) => handleGetUsers(e)}>Get users</button>;
};

export default CrudTemplate;
