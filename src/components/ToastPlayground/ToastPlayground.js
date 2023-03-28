import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
// import Toast from "../Toast";


import ToastShelf from "../ToastShelf";
// import toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];


function ToastPlayground() {
  const [messageContent, setMessageContent] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  // const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

  // function handleDismiss() {
  //   setIsToastVisible(false);
  // }

  function addToTheToasts(newToast) {

    if (toasts.length > 0) {
      setToasts([...toasts, newToast]);
    } else {
      setToasts([newToast]);
    }
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/*{isToastVisible && <Toast variant={variant} handleDismiss={handleDismiss}>{messageContent}</Toast>}*/}

      <ToastShelf toasts={toasts} setToasts={setToasts} />
      <div className={styles.controlsWrapper}>

        <form onSubmit={event => {
          event.preventDefault();
          addToTheToasts([variant, messageContent,crypto.randomUUID()]);
          setMessageContent("");
          setVariant(VARIANT_OPTIONS[0])
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
              <textarea id="message" className={styles.messageInput} value={messageContent}
                        onChange={event => {
                          setMessageContent(event.target.value);
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
                    checked={variant === option}
                    onChange={event => {
                      setVariant(event.target.value);
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
