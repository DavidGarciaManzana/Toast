import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function removeToast(index) {
    let newToast = [...toasts]
    newToast.splice(index, 1);

    setToasts(newToast);
    console.log(newToast)
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (

        <li className={styles.toastWrapper} key={toast[2]}>
          <Toast variant={toast[0]} index={index} removeToast={removeToast}>{toast[1]}</Toast>
        </li>

      ))}


    </ol>
  );
}

export default ToastShelf;
