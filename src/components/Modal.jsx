import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;

/***
 * Refers to the object passed between the opening and closing
 * tags of your custom component. In this case, the Modal
 * component will receive NewPost component as children
 */
