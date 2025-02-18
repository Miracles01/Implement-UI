import { useNavigate } from "react-router-dom";
import styles from "./MODE.module.css";
import React from "react";

const MODE = () => {
  const navigate = useNavigate();

  // ฟังก์ชันนำทางกลับไปหน้า START
  const goBackToStart = () => {
    navigate("/"); // นำทางไปที่หน้า START
  };

  return (
    <div className={styles.mode}>
      <img
        className={styles.config114}
        alt=""
        src="src/public/Config/Config.png"
      />
      <div className={styles.modeChild} />
      <div className={styles.modeItem} />
      <div className={styles.modeInner} />
      <div className={styles.pvp}>PVP</div>
      <div className={styles.pve}>PVE</div>
      <div className={styles.auto}>AUTO</div>
      {/* เพิ่ม onClick ให้กับรูปนี้เพื่อกลับไปที่หน้า START */}
      <img
        className={styles.vectorIcon}
        alt="Back"
        src="public/Vector Back.png"
        onClick={goBackToStart} // เมื่อคลิก จะกลับไปหน้า START
      />
      <img
        className={styles.previewRev12Icon}
        alt=""
        src="public\nian-cat.gif"
      />
    </div>
  );
};

export default MODE;
