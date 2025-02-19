import { FunctionComponent } from "react";
import styles from "./Join.module.css";
import React from "react";

const Join: FunctionComponent = () => {
  return (
    <div className={styles.join}>
      <img className={styles.join1Icon} alt="" src="/join-1@2x.png" />
      <img
        className={styles.magePreviewRev11Icon}
        alt=""
        src="/mage-preview-rev-1-1@2x.png"
      />
      <img
        className={styles.vikingPreviewRev11Icon}
        alt=""
        src="/viking-preview-rev-1-1@2x.png"
      />
      <div className={styles.joinGame}>Join game......</div>
      <div className={styles.div}>1/2</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.done}></div>
      </div>
    </div>
  );
};

export default Join;
