import classes from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modalOverlay}>{props.children}</div>;
};

const overlay = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, overlay)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
    </Fragment>
  );
};

export default Modal;
