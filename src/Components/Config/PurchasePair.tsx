import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PurchasePair.module.css";
import React from "react";

export type PurchasePairType = {
  className?: string;
  initialBudget?: string;
  purchaseSeparator?: string;

  /** Style props */
  purchasePairGap?: CSSProperties["gap"];
  turnsPairPadding?: CSSProperties["padding"];
  turnsPairWidth?: CSSProperties["width"];
  groupDivPadding?: CSSProperties["padding"];
};

const PurchasePair: FunctionComponent<PurchasePairType> = ({
  className = "",
  purchasePairGap,
  turnsPairPadding,
  turnsPairWidth,
  initialBudget,
  groupDivPadding,
  purchaseSeparator,
}) => {
  const purchasePairStyle: CSSProperties = useMemo(() => {
    return {
      gap: purchasePairGap,
    };
  }, [purchasePairGap]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: turnsPairPadding,
      width: turnsPairWidth,
    };
  }, [turnsPairPadding, turnsPairWidth]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  return (
    <div
      className={[styles.purchasePair, className].join(" ")}
      style={purchasePairStyle}
    >
      <div className={styles.initialBudgetWrapper}>
        <b className={styles.initialBudget}>{initialBudget}</b>
      </div>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.frameChild} />
        <b className={styles.purchaseSeparator}>{purchaseSeparator}</b>
      </div>
    </div>
  );
};

export default PurchasePair;
