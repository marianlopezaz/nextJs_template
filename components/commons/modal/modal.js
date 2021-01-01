import React, { useState, useEffect } from "react";

/* Dependencies Imports */
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/** General modal structure thats receives title, body and button to open by props.
 * @param {string} title - Title to show as modal title
 * @param {any} button - Html button or component to show to open modal
 * @param {any} body - Html element or component to render as body of modal
 * @param {boolean} disableBackdrop - attribute to disable click and close on modal backdrop click
 * Usage Ex:
 *   <Modal
 *    title="Agregar usuario"
 *    body = {<ModalForm props />}
 *    button= {<button>Agregar Usuario</button>}
 *    />
 */

const Modal = ({ title, body, button, disableBackdrop }) => {
  const newBody = { ...body };
  const [show, setShow] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(992));

  const handleVisibilityModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    newBody.props = { ...body.props, closeModal: handleVisibilityModal };
  });

  return (
    <>
      <Dialog
        open={show}
        onClose={!disableBackdrop ? handleVisibilityModal : null}
        fullScreen={fullScreen}
        maxWidth="sm"
        className="responsive_modal center"
        TransitionComponent={Transition}
      >
        <img
          onClick={handleVisibilityModal}
          src="/icons/close.svg"
          className="close_modal"
        />
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <div>{newBody}</div>
        </DialogContent>
      </Dialog>
      <span onClick={handleVisibilityModal}>{button}</span>
    </>
  );
};

export default Modal;
