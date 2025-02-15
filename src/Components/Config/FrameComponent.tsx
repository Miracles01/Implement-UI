import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";
import React from "react";

export type FrameComponentType = {
  className?: string;
  initialMinionHP?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivGap?: CSSProperties["gap"];
  turnDetailsJustifyContent?: CSSProperties["justifyContent"];
  turnDetailsPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivPadding,
  frameDivAlignItems,
  frameDivGap,
  turnDetailsJustifyContent,
  turnDetailsPadding,
  initialMinionHP,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
      gap: frameDivGap,
    };
  }, [frameDivAlignItems, frameDivGap]);

  const turnDetailsStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: turnDetailsJustifyContent,
      padding: turnDetailsPadding,
    };
  }, [turnDetailsJustifyContent, turnDetailsPadding]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.turnDetailsParent} style={frameDiv1Style}>
        <div className={styles.turnDetails} style={turnDetailsStyle}>
          <b className={styles.initialMinionHp}>{initialMinionHP}</b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.hpValue}>100</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
