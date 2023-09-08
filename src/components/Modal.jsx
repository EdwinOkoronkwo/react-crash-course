import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;

/***
 * Refers to the object passed between the opening and closing
 * tags of your custom component. In this case, the Modal
 * component will receive NewPost component as children
 */
