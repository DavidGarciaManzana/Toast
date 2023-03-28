import React from "react";
import { ToastContext } from "../ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X
} from "react-feather";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function Toast({ variant, index, children }) {
  const {removeToast} = React.useContext(ToastContext);
  let Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={() => {
        removeToast(index);
      }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
