import classes from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
  return <div onClick={props.onHideModal} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modalOverlay}>
      <button onClick={props.onHideModal} className={classes.btnClose}>
        x
      </button>
      {props.children}
    </div>
  );
};

const overlay = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onHideModal={props.onHideModal} />, overlay)}
      {createPortal(
        <ModalOverlay onHideModal={props.onHideModal}>
          {props.children}
        </ModalOverlay>,
        overlay
      )}
    </Fragment>
  );
};

export default Modal;
