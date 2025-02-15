import { FunctionComponent, useCallback } from "react";
import styles from "./Join.module.css";
import React from "react";

const Join: FunctionComponent = () => {
  const onJoinGameTextClick = useCallback(() => {
    // Please sync "game play" to the project
  }, []);

  return (
    <div className={styles.join}>
      <img className={styles.join1Icon} alt="" src="/join-1@2x.png" />
      <main className={styles.gamePreviews}>
        <img
          className={styles.vikingPreviewRev11Icon}
          alt=""
          src="/viking-preview-rev-1-1@2x.png"
        />
        <img
          className={styles.shadowRoguePreviewRev11}
          alt=""
          src="/shadow-rogue-preview-rev-1-1@2x.png"
        />
        <img
          className={styles.restlessSpiritPreviewRev1}
          alt=""
          src="public\restless-spirit-preview-rev-1-1@2x.png"
        />
      </main>
      <div className={styles.joinGameButton}>
        <div className={styles.joinGame} onClick={onJoinGameTextClick}>
          Join game......
        </div>
      </div>
      <div className={styles.magePreviewRev11Parent}>
        <img
          className={styles.magePreviewRev11Icon}
          alt=""
          src="public\mage-preview-rev-1-1@2x.png"
        />
        <div className={styles.div}>1/2</div>
      </div>
    </div>
  );
};

export default Join;
