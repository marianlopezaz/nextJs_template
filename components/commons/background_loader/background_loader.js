import React, { useState, useEffect } from "react";

// Import dependencias
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Slide from "@material-ui/core/Slide";

// Import componentes
import styles from "./styles.module.scss";

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

/**
 * Loading handler component
 * @param {boolean} show - Must be called with a boolean variable. Ej: swr isValidating variable.
 */
const BackgroundLoader = ({ show }) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, open: show });
    }, 250);
  }, [show]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        TransitionComponent={SlideTransition}
      >
        <div id={styles.loader_container}>
          <CircularProgress
            size={18}
            color="primary"
            className={styles.circular_progress}
          />
          Actualizando...
        </div>
      </Snackbar>
    </div>
  );
};

export default BackgroundLoader;
