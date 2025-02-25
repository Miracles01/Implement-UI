import { FunctionComponent, useCallback } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  const onComponentClick = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  return (
    <div className={[styles.component1, className].join(" ")}>
      <img className={styles.componentIcon} alt="" src="/component.svg" />
      <img className={styles.componentIcon1} alt="" src="/vector-1.svg" />
      <img className={styles.componentIcon2} alt="" src="/vector-2.svg" />
      <img className={styles.componentIcon3} alt="" src="/vector-3.svg" />
      <img className={styles.componentIcon4} alt="" src="/vector-4.svg" />
      <img
        className={styles.componentIcon5}
        alt=""
        src="/vector-5.svg"
        onClick={onComponentClick}
      />
      <section className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon1} alt="" src="/vector-7.svg" />
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon2} alt="" src="/vector-8.svg" />
        </div>
      </section>
      <img
        className={styles.componentIcon6}
        loading="lazy"
        alt=""
        src="/vector-9.svg"
      />
      <section className={styles.vectorGroup}>
        <img className={styles.vectorIcon3} alt="" src="/vector-10.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector-11.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector-12.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector-13.svg" />
        <img className={styles.vectorIcon7} alt="" src="/vector-14.svg" />
        <img className={styles.vectorIcon8} alt="" src="/vector-15.svg" />
        <img className={styles.vectorIcon9} alt="" src="/vector-16.svg" />
        <img className={styles.vectorIcon10} alt="" src="/vector-17.svg" />
        <img className={styles.vectorIcon11} alt="" src="/vector-18.svg" />
        <img className={styles.vectorIcon12} alt="" src="/vector-19.svg" />
        <img className={styles.vectorIcon13} alt="" src="/vector-20.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector-21.svg" />
        <img className={styles.vectorIcon15} alt="" src="/vector-22.svg" />
        <img className={styles.vectorIcon16} alt="" src="/vector-23.svg" />
        <img className={styles.vectorIcon17} alt="" src="/vector-24.svg" />
        <img className={styles.vectorIcon18} alt="" src="/vector-25.svg" />
        <img className={styles.vectorIcon19} alt="" src="/vector-26.svg" />
        <img className={styles.vectorIcon20} alt="" src="/vector-27.svg" />
        <img className={styles.vectorIcon21} alt="" src="/vector-28.svg" />
        <img className={styles.vectorIcon22} alt="" src="/vector-29.svg" />
        <img className={styles.vectorIcon23} alt="" src="/vector-30.svg" />
        <img className={styles.vectorIcon24} alt="" src="/vector-31.svg" />
        <img className={styles.vectorIcon25} alt="" src="/vector-32.svg" />
        <img className={styles.vectorIcon26} alt="" src="/vector-33.svg" />
        <img className={styles.vectorIcon27} alt="" src="/vector-34.svg" />
        <img className={styles.vectorIcon28} alt="" src="/vector-35.svg" />
        <img className={styles.vectorIcon29} alt="" src="/vector-36.svg" />
        <img className={styles.vectorIcon30} alt="" src="/vector-37.svg" />
        <img className={styles.vectorIcon31} alt="" src="/vector-38.svg" />
        <img className={styles.vectorIcon32} alt="" src="/vector-39.svg" />
        <img className={styles.vectorIcon33} alt="" src="/vector-40.svg" />
        <img className={styles.vectorIcon34} alt="" src="/vector-41.svg" />
        <img className={styles.vectorIcon35} alt="" src="/vector-42.svg" />
        <img className={styles.vectorIcon36} alt="" src="/vector-43.svg" />
        <img className={styles.vectorIcon37} alt="" src="/vector-44.svg" />
        <img className={styles.vectorIcon38} alt="" src="/vector-45.svg" />
        <img className={styles.vectorIcon39} alt="" src="/vector-46.svg" />
        <img className={styles.vectorIcon40} alt="" src="/vector-47.svg" />
        <img className={styles.vectorIcon41} alt="" src="/vector-48.svg" />
        <img className={styles.vectorIcon42} alt="" src="/vector-49.svg" />
        <img className={styles.vectorIcon43} alt="" src="/vector-50.svg" />
        <img className={styles.vectorIcon44} alt="" src="/vector-51.svg" />
        <img className={styles.vectorIcon45} alt="" src="/vector-52.svg" />
        <img className={styles.vectorIcon46} alt="" src="/vector-53.svg" />
        <img
          className={styles.vectorIcon47}
          loading="lazy"
          alt=""
          src="/vector-54.svg"
        />
        <img
          className={styles.vectorIcon48}
          loading="lazy"
          alt=""
          src="/vector-55.svg"
        />
        <img
          className={styles.vectorIcon49}
          loading="lazy"
          alt=""
          src="/vector-56.svg"
        />
        <img
          className={styles.vectorIcon50}
          loading="lazy"
          alt=""
          src="/vector-57.svg"
        />
        <img
          className={styles.vectorIcon51}
          loading="lazy"
          alt=""
          src="/vector-58.svg"
        />
        <img
          className={styles.vectorIcon52}
          loading="lazy"
          alt=""
          src="/vector-59.svg"
        />
        <img
          className={styles.vectorIcon53}
          loading="lazy"
          alt=""
          src="/vector-60.svg"
        />
      </section>
      <section className={styles.frameSection}>
        <img className={styles.vectorIcon54} alt="" src="/vector-61.svg" />
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon1} alt="" src="/vector-62.svg" />
        </div>
        <img className={styles.vectorIcon56} alt="" src="/vector-63.svg" />
      </section>
    </div>
  );
};

export default Component1;
