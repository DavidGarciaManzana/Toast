import React from "react";

function useKey (action, key = 'Escape'){


  React.useEffect(() => {
    let trigger = (event) => {
      if (event.code === key) {
        action()
      }

    };
    document.addEventListener("keydown", trigger);
    return () => {
      document.removeEventListener("keydown", trigger);
    };


  }, [action,key]);

}

export default useKey