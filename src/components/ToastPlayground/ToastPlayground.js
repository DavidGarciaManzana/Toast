import React from "react";
import { ToastContext } from "../ToastProvider";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf";


const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];


function ToastPlayground() {
  const toast = React.useContext(ToastContext);



  return (

    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>


      <ToastShelf />
      <div className={styles.controlsWrapper}>

        <form onSubmit={event => {
          event.preventDefault();
          toast.addToTheToasts([toast.variant, toast.messageContent, crypto.randomUUID()]);
          toast.setMessageContent("");
          toast.setVariant(VARIANT_OPTIONS[0]);
        }}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput}
                        value={toast.messageContent}
                        onChange={event => {
                          toast.setMessageContent(event.target.value);
                        }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >

              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`} key={option}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={toast.variant === option}
                    onChange={event => {
                      toast.setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              ))}

            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
    ;
}

export default ToastPlayground;
