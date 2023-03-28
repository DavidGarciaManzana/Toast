import React from "react";


import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";


function Toast({ variantSelected, icons, handleDismiss, children }) {
  let Icon = icons[variantSelected];
  let X = icons.close;
  return (
    <div className={`${styles.toast} ${styles[variantSelected]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={() => {
        handleDismiss();
      }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
