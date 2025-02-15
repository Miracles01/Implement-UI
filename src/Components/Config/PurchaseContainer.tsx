import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import PurchasePair from "./PurchasePair";
import styles from "./PurchaseContainer.module.css";
import React from "react";

export type PurchaseContainerType = {
  className?: string;
};

const PurchaseContainer: FunctionComponent<PurchaseContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.purchaseContainer, className].join(" ")}>
      <div className={styles.hexContainer}>
        <b className={styles.costToPurchase}>Cost to Purchase Hex</b>
        <FrameComponent frameDivPadding="0px 4px 0px 0px" />
      </div>
      <div className={styles.purchasePairWrapper}>
        <PurchasePair
          initialBudget="Initial Budget"
          purchaseSeparator="10000"
        />
      </div>
      <PurchasePair
        purchasePairGap="12px"
        turnsPairPadding="0px 23px 0px 22px"
        turnsPairWidth="334px"
        initialBudget="Maximum Turns per Game"
        groupDivPadding="31px 146px 32px"
        purchaseSeparator="100"
      />
    </div>
  );
};

export default PurchaseContainer;
