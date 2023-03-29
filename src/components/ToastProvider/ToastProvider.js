import React from "react";
import useKey from "../../hooks/UseKey";
export const ToastContext = React.createContext(undefined);

function ToastProvider({ children }) {
  const [messageContent, setMessageContent] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);


  function addToTheToasts(newToast) {
    if (toasts.length > 0) {
      setToasts([...toasts, newToast]);
    } else {
      setToasts([newToast]);
    }
  }

  function removeToast(index) {
    let newToast = [...toasts];
    newToast.splice(index, 1);
    setToasts(newToast);
  }
  const handleEscape = React.useCallback(()=>{
    setToasts([]);
  },[])
  useKey(handleEscape);


  return (
    <ToastContext.Provider value={{
      messageContent,
      setMessageContent,
      variant,
      setVariant,
      toasts,
      addToTheToasts,
      removeToast
    }}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;



