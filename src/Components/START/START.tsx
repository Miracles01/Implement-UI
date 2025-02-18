import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./START.module.css";
import React from "react";

const START: FunctionComponent = () => {
  const navigate = useNavigate();

  // ฟังก์ชันนำทางไปหน้า Config
  const onPlayClick = useCallback(() => {
    navigate("/Config"); // เมื่อคลิก PLAY ไปที่หน้า Config
  }, [navigate]);

  const onConfigClick = useCallback(() => {
    navigate("/Config"); // เมื่อคลิก CONFIX ไปที่หน้า Config
  }, [navigate]);

  return (
    <div className={styles.start}>
      <div className={styles.kombatWrapper}>
        <h2 className={styles.kombat}>KOMBAT</h2>
      </div>
      <section className={styles.markedCitiesCollinaltaPreWrapper}>
        <img
          className={styles.markedCitiesCollinaltaPre}
          alt=""
          src="src/public/START/Marked Cities - Collinalta_preview_rev_1 1.png"
        />
      </section>
      <section className={styles.navigationParent}>
        <div className={styles.navigation}>
          <img
            className={styles.navigationIcon}
            loading="lazy"
            alt="Navigation Icon"
            src="src/public/START/Vector.png"
          />
        </div>
        <div className={styles.confixParent}>
          <div className={styles.confix} onClick={onConfigClick}>
            MODE
          </div>
          <div className={styles.menuOptions}>
            <div className={styles.playExit} onClick={onPlayClick}>
              <div className={styles.play}>PLAY</div>
            </div>
            <div className={styles.exit}>
              <div className={styles.exit1}>EXIT</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default START;
