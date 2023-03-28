import React from "react";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";
import Toast from "../Toast";


function ToastShelf() {
  const {toasts}  = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (

        <li className={styles.toastWrapper} key={toast[2]}>
          <Toast variant={toast[0]} index={index} >{toast[1]}</Toast>
        </li>

      ))}


    </ol>
  );
}

export default ToastShelf;
