import { useNavigate } from "react-router-dom";
import styles from "./MODE.module.css";
import React from "react";

const MODE = () => {
  const navigate = useNavigate();

  // ฟังก์ชันนำทางไปยังหน้า Config
  const goToConfig = () => {
    navigate("/Config");  // นำทางไปที่หน้า Config
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
      <div 
        className={styles.pvp} 
        onClick={goToConfig}  // นำทางไปหน้า Config เมื่อคลิก
      >
        PVP
      </div>
      <div 
        className={styles.pve} 
        onClick={goToConfig}  // นำทางไปหน้า Config เมื่อคลิก
      >
        PVE
      </div>
      <div 
        className={styles.auto} 
        onClick={goToConfig}  // นำทางไปหน้า Config เมื่อคลิก
      >
        AUTO
      </div>
      <img
        className={styles.vectorIcon}
        alt="Back"
        src="public/Vector Back.png"
        onClick={() => navigate("/")}  // กลับไปหน้า START
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
