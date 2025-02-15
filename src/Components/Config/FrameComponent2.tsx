import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";
import React from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.financialPairParent, className].join(" ")}>
      <div className={styles.financialPair}>
        <div className={styles.interestRateWrapper}>
          <b className={styles.interestRate}>Interest Rate (%)</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.separator}>5</b>
        </div>
      </div>
      <div className={styles.financialPair1}>
        <div className={styles.initialBudgetContainer}>
          <b className={styles.interestRate}>Budget per Turn</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <b className={styles.b}>90</b>
        </div>
      </div>
      <div className={styles.spawnsContainer}>
        <b className={styles.maximumSpawnsPer}>Maximum Spawns per Player</b>
        <div className={styles.initialBudgetContainer1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild} />
            <b className={styles.separator}>47</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
