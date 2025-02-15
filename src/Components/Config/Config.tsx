import { FunctionComponent, useCallback } from "react";
import Score from "./Score";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import PurchaseContainer from "./PurchaseContainer";
import styles from "./Config.module.css";
import React from "react";

const Config: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDONETextClick = useCallback(() => {
    // Please sync "join" to the project
  }, []);

  const onVectorClick = useCallback(() => {
    navigate("/start");
  }, [navigate]);

  return (
    <div className={styles.config}>
      <div className={styles.main}>
        <main className={styles.config11Parent}>
          <img className={styles.config11} alt="" src="public\config-1-1@2x.png" />
          <div className={styles.scoreWrapper}>
            <div className={styles.score}>
              <b className={styles.configuration}>CONFIGURATION</b>
            </div>
          </div>
          <div className={styles.scoreParent}>
            <Score text=" " />
            <b className={styles.done} onClick={onDONETextClick}>
              DONE
            </b>
          </div>
        </main>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="public\vector.svg"
          onClick={onDONETextClick}
        />
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="public\vector-1.svg"
          onClick={onVectorClick}
        />
      </div>
      <div className={styles.turnDisplay}>
        <div className={styles.turnDisplayChild} />
        <FrameComponent2 />
        <div className={styles.hpContainer}>
          <FrameComponent1 />
          <PurchaseContainer />
        </div>
      </div>
    </div>
  );
};

export default Config;
