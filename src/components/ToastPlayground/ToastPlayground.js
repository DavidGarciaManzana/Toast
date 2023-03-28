import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X
} from "react-feather";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function ToastPlayground() {
  // console.log(ICONS_BY_VARIANT["notice"])
  const [messageContent, setMessageContent] = React.useState("");
  const [variantSelected, setVariantSelected] = React.useState("notice");
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && <Toast messageContent={messageContent} variantSelected={variantSelected}
                                Icon={ICONS_BY_VARIANT[variantSelected]} X={X} />}
      <div className={styles.controlsWrapper}>
        <form onSubmit={event => {
          event.preventDefault();
          setIsToastVisible(!isToastVisible);
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
              <textarea id="message" className={styles.messageInput} value={messageContent} onChange={event => {
                setMessageContent(event.target.value);
              }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >

              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor={`variant-${variant}`} key={variant}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variantSelected === variant}
                    onChange={event => {
                      setVariantSelected(event.target.value);
                    }}
                  />
                  {variant}
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
