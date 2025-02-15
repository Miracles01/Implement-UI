import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent1.module.css";
import React from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent initialMinionHP="Initial Minion HP" />
      <div className={styles.budgetContainer}>
        <div className={styles.maximumBudgetWrapper}>
          <b className={styles.maximumBudget}>Maximum Budget</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.b4}>23456</b>
        </div>
      </div>
      <div className={styles.costToSpawnMinionParent}>
        <b className={styles.costToSpawn}>Cost to Spawn Minion</b>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <b className={styles.b4}>100</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
