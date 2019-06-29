/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import { Route, Redirect } from "@reach/router";
import { useReset } from "../action-hook";
import Modal from "../components/Modal";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function HeaderBar({ routePath, titleBar }) {
  const [showDialog, setShowDialog] = useState(false);

  const headerCss = {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(245, 230, 83, 1)",
    padding: 20,
    width: "100%",
    fontWeight: "bold",
    marginBottom: "30px",
    zIndex: 4
  };

  const h1 = {
    margin: 0
  };

  const buttoncss = {
    background: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    color: "white"
  };

  const reset = useReset();

  function handleYes() {
    Redirect("/");
    reset();
  }

  // const [show, setShow] = useState(false);

  // function handleModal() {
  //   setShow(true);
  // }

  return (
    <div css={headerCss}>
      {titleBar === "Product List" ? (
        <button css={buttoncss} onClick={() => setShowDialog(true)}>
          <Icon name="arrow alternate circle left outline" size="large">
            <Dialog isOpen={showDialog} onDismiss={() => setShowDialog(true)}>
              <p>¿Estás seguro? Podrías perder tus productos</p>
              <button onClick={() => setShowDialog(false)}>Sí</button>
              <button onClick={() => setShowDialog(false)}>
                No, deseo quedarme
              </button>
            </Dialog>
          </Icon>
        </button>
      ) : (
        <Link to={routePath} style={{ color: "white" }}>
          <Icon name="arrow alternate circle left outline" size="large" />
        </Link>
      )}

      {/* {show ? <Modal /> : null} */}

      {/* <Link to={routePath} style={{ color: "white" }}>
        <Icon name="arrow alternate circle left outline" size="large" />
      </Link> */}
      <br />
      <h1 css={h1}>{titleBar}</h1>
    </div>
  );
}

export default HeaderBar;
