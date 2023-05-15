import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onHide} className={styles.backdrop}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onHide={props.onHide} />, portalElement)}
      {ReactDom.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
