// Axios
import axios from "axios";
import Config from "./config";
import { loadState } from "../redux/immutableState";
import errorHandler from "./errorhandler";

export function validateLoginUser() {
  const state = loadState();
  return state;
}