import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Score.module.css";

export type ScoreType = {
  className?: string;
  text?: string;

  /** Style props */
  scoreHeight?: CSSProperties["height"];
  scoreWidth?: CSSProperties["width"];
  scoreBackgroundColor?: CSSProperties["backgroundColor"];
  scorePadding?: CSSProperties["padding"];
  scorePosition?: CSSProperties["position"];
  scoreTop?: CSSProperties["top"];
  scoreLeft?: CSSProperties["left"];
  textHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  scoreRight?: CSSProperties["right"];
  scoreBottom?: CSSProperties["bottom"];
  scoreDisplay?: CSSProperties["display"];
  scoreFlexDirection?: CSSProperties["flexDirection"];
  scoreAlignItems?: CSSProperties["alignItems"];
  scoreJustifyContent?: CSSProperties["justifyContent"];
  textPosition?: CSSProperties["position"];
  textTop?: CSSProperties["top"];
  textLeft?: CSSProperties["left"];
};

const Score: FunctionComponent<ScoreType> = ({
  className = "",
  scoreHeight,
  scoreWidth,
  scoreBackgroundColor,
  scorePadding,
  scorePosition,
  scoreTop,
  scoreLeft,
  text,
  textHeight,
  textWidth,
  scoreRight,
  scoreBottom,
  scoreDisplay,
  scoreFlexDirection,
  scoreAlignItems,
  scoreJustifyContent,
  textPosition,
  textTop,
  textLeft,
}) => {
  const scoreStyle: CSSProperties = useMemo(() => {
    return {
      height: scoreHeight,
      width: scoreWidth,
      backgroundColor: scoreBackgroundColor,
      padding: scorePadding,
      position: scorePosition,
      top: scoreTop,
      left: scoreLeft,
      right: scoreRight,
      bottom: scoreBottom,
      display: scoreDisplay,
      flexDirection: scoreFlexDirection,
      alignItems: scoreAlignItems,
      justifyContent: scoreJustifyContent,
    };
  }, [
    scoreHeight,
    scoreWidth,
    scoreBackgroundColor,
    scorePadding,
    scorePosition,
    scoreTop,
    scoreLeft,
    scoreRight,
    scoreBottom,
    scoreDisplay,
    scoreFlexDirection,
    scoreAlignItems,
    scoreJustifyContent,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      height: textHeight,
      width: textWidth,
      position: textPosition,
      top: textTop,
      left: textLeft,
    };
  }, [textHeight, textWidth, textPosition, textTop, textLeft]);

  return (
    <div className={[styles.score, className].join(" ")} style={scoreStyle}>
      <b className={styles.text} style={textStyle}>
        {text}
      </b>
    </div>
  );
};

export default Score;
