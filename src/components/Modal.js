/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Modal() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div css={{ zIndex: 100 }}>
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={() => setShowDialog(true)}>
        <p>¿Estás seguro? Podrías perder tus productos</p>
        <button onClick={() => setShowDialog(false)}>Yes</button>
        <button onClick={() => setShowDialog(false)}>No, deseo quedarme</button>
      </Dialog>
    </div>
  );
}

export default Modal;
