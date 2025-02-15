import { FunctionComponent } from "react";
import styles from "./START.module.css";
import React from "react";

const START: FunctionComponent = () => {
  return (
    <div className={styles.start}>
      <div className={styles.frameParent}>
        <div className={styles.kombatParent}>
          <h2 className={styles.kombat}>KOMBAT</h2>
          <div className={styles.confixWrapper}>
            <div className={styles.confix}>CONFIX</div>
          </div>
        </div>
        <div className={styles.exitWrapper}>
          <div className={styles.exit}>EXIT</div>
        </div>
      </div>
      <main className={styles.preview}>
        <img
          className={styles.baralobaAlongTheHewbankPr}
          alt=""
          src="src\public\START\888.png"
        />
        <img
          className={styles.baralobaAlongTheHewbankPr1}
          alt=""
          src="src\public\START\Baraloba_ Along the Hewbank_preview_rev_1 (1) 2.png"
        />
        <img
          className={styles.markedCitiesCollinaltaPre}
          alt=""
          src="src\public\START\Marked Cities - Collinalta_preview_rev_1 1.png"
        />
        <img
          className={styles.baralobaTheEagleHillsMine}
          alt=""
          src="src\public\START\Baraloba_ The Eagle Hills Mines_preview_rev_1 2.png"
        />
        <img
          className={styles.navigationIcon}
          loading="lazy"
          alt=""
          src="src\public\START\Vector.png"
        />
        <img
          className={styles.baralobaTheEagleHillsMine1}
          alt=""
          src="src\public\START\Baraloba_ The Eagle Hills Mines_preview_rev_1 1.png"
        />
      </main>
    </div>
  );
};

export default START;
