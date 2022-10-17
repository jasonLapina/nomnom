import { Fragment } from 'react';
import classes from './Modal.module.scss';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const overlay = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <div className={props.className}>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, overlay)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
    </div>
  );
};

export default Modal;
