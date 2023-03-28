import React from 'react';


import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';



function Toast({messageContent,variantSelected,Icon,X,isToastVisible,setIsToastVisible}) {
  // console.log(icon)
  return (
    <div className={`${styles.toast} ${styles[variantSelected]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {messageContent}
      </p>
      <button className={styles.closeButton} onClick={()=>{setIsToastVisible(!isToastVisible)}}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
